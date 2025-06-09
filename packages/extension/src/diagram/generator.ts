import { RequestModelAction, SGraph, SEdge, SNode, SetModelAction, SPort, SLabel, RequestBoundsAction, ComputedBoundsAction, UpdateModelAction } from 'sprotty-protocol';
import {
    ElkNode, ElkLabel, ElkPort, ElkShape, ElkExtendedEdge, LayoutOptions, ElkPrimitiveEdge
} from 'elkjs/lib/elk-api';
import ELK from 'elkjs/lib/elk.bundled.js';
import { v4 as uuid } from 'uuid';
import { DeclCollector, SymbolType } from "../decl";
import { ComponentDecl, PortDecl, PortInstance, PortInstanceDecl } from "../parser/ast";
import { MemberTraverser } from "../traverser";

const elk = new ELK();

/** 
 * The additional FPP information attached to ELK nodes
 * when creating ELK nodes from decl collector
 */
interface FppData {
    type: string,
    name?: string,
}

/** An FPP ELK node is a regular ElkNode with an extra data field containing FPP info. */
interface FppElkNode extends ElkNode {
    data?: FppData
}

interface FppElkPort extends ElkPort {
    data?: FppData
}

export class GraphGenerator {
    
    /**
     * Initialize an SGraph to be modified.
     * @returns an empty graph
     */
    static initElkGraph(): FppElkNode {
        return {
            // type: 'graph',
            id: 'root',
            layoutOptions: { 'elk.algorithm': 'layered' },
            children: [],
            edges: [],
        };
    }

    /**
     * Generate an SGraph that renders an entire topology.
     * @param decl The DeclCollector with all info about the FPP files
     * @returns An SGraph to be sent to webview
     */
    static async topology(decl: DeclCollector): Promise<SGraph> {
        const elkGraph: FppElkNode = this.initElkGraph();
        Array.from(decl.componentInstances.entries()).forEach(([key, componentInstanceDecl], index) => {
            // For each instance, loop up the ComponentDecl.
            const resolved = decl.resolve(
                componentInstanceDecl.fppType.type,
                componentInstanceDecl.scope,
                SymbolType.component
            );
            if (!resolved) {
                throw new Error(`${componentInstanceDecl} is not resolved.`);
            }
            const componentName = MemberTraverser.flat(resolved);
            const componentDecl = decl.get(componentName, SymbolType.component) as ComponentDecl;

            // Instantiate a component FppElkNode for the component type.
            const node = this.createElkNodeComponent(componentDecl, key);
            
            // Push SNode into graph.
            elkGraph.children!.push(node);
        });

        // Perform layout
        await elk.layout(elkGraph)
            .then(console.log)
            .catch(console.error);

        // Convert to SGraph
        const sGraph: SGraph = this.convertElkGraphToSGraph(elkGraph);
        
        return sGraph;
    }

    /**
     * Generate an SGraph that shows a specific connection group.
     * @param decl The DeclCollector with all info about the FPP files
     * @param connectionGroupName Name of the connection group to generate the graph for
     * @returns An SGraph to be sent to webview
     */
    static connectionGroup(decl: DeclCollector, connectionGroupName: string): SGraph {
        const elkGraph: FppElkNode = this.initElkGraph();
        console.log(decl.graphGroups);
        
        // FIXME: Need a better way to look for the right key.
        // A faster way is to get the topology name and concatenate,
        // since keys follow the "topologyName.connectionGroupName" pattern.
        var graphGroupName = undefined;
        decl.graphGroups.forEach((val, key) => {
            if (key.includes(connectionGroupName)) {
                graphGroupName = key;
            }
        });
        if (!graphGroupName) {
            throw new Error(`Graph group key not found for: ${connectionGroupName}`);
        }

        console.log("graph group: ", graphGroupName);
        const graphGroup = decl.graphGroups.get(graphGroupName)!;
        if (!graphGroup) {
            throw new Error(`Graph group not found: ${graphGroupName}`);
        }

        // Perform layout
        elk.layout(elkGraph)
            .then(console.log)
            .catch(console.error);

        // Convert to SGraph
        const sGraph: SGraph = this.convertElkGraphToSGraph(elkGraph);

        return sGraph;
    }

    /*****************************************/
    /* Helper functions for generating SNode */
    /*****************************************/

    /**
     * A helper method for building an Sprotty model for an FPP component
     * @param comp ComponentDecl from decl collector
     * @param uid Component instance name, which is supposed to be unique.
     */
    static createElkNodeComponent(comp: ComponentDecl, uid: string): FppElkNode {
        // Instantiate an SNode for the component.
        var node: FppElkNode = {
            id: uid,
            height: 200,
            width: 100,
            children: [],
            ports: [],
            data: {
                type: 'component',
                name: comp.name.value,
            }
        };

        // Add an SPort to children for each port of the component.
        comp.members.forEach((val, i) => {
            if (this.isPortInstanceDecl(val)) {
                // Currently, UUID ensures the uniqueness of the port instance ID.
                // FIXME: Is there a better way to get unique ID?
                // FIXME: Is there a better way to get a fully qualified name?
                const uid = val.scope.map(i => i.value).join('.') + val.name.value + '.' + uuid();
                node.ports!.push(this.createElkNodePort(val, uid));
            }
        });

        return node;
    }

    static createElkNodePort(port: PortInstanceDecl, uid: string): FppElkPort {
        const portNode: FppElkPort = {
            id: uid,
            height: 10,
            width: 10,
            data: {
                type: 'port',
                name: port.name.value,
            }
        };
        return portNode;
    }

    /**
     * A type guard function for checking whether an object can be
     * safely treated as a certain type.
     * Caution: This needs to update when `ast.ts` is changed.
     */
    static isPortInstanceDecl(obj: any): obj is PortInstanceDecl {
        return obj && (obj.type === 'GeneralPortInstanceDecl'
            || obj.type === 'SpecialPortInstanceDecl'
        );
    }

    /**
     * Convert an ELK graph into a Sprotty SGraph.
     * @param elkGraph 
     */
    static convertElkGraphToSGraph(elkGraph: FppElkNode): SGraph {
        const sGraph: SGraph = {
            type: 'graph',
            id: 'root',
            children: [],
        };

        this.convertElkGraphToSGraphRecursive(sGraph, elkGraph);

        return sGraph;
    }

    /**
     * 
     * @param sRoot 
     * @param eRoot 
     */
    static convertElkGraphToSGraphRecursive(sNode: SNode, eNode: FppElkNode): void {
        // At the current layer of the tree, instantiate a component SNode for each elk child.
        eNode.children?.forEach(eChild => {
            const sChild = <SNode>{
                // Fields defined in webview/models
                // Here we grab data from the extended ELK nodes
                // and put them in the generated SNode.
                type: (eChild as FppElkNode).data!.type,
                name: (eChild as FppElkNode).data!.name,
                // Regular SNode fields
                id: eChild.id,
                size: {
                    width: eChild.width,
                    height: eChild.height
                },
                position: {
                    x: eChild.x,
                    y: eChild.y
                },
                children: [],
            };

            // Recursive on this child.
            this.convertElkGraphToSGraphRecursive(sChild, eChild);

            // Push the built child into the children array.
            sNode.children?.push(sChild);
        });

        // Convert each ELK port into an SNode
        eNode.ports?.forEach(ePort => {
            const sPort = <SPort>{
                // Fields defined in webview/models
                // Here we grab data from the extended ELK nodes
                // and put them in the generated SNode.
                type: (ePort as FppElkPort).data!.type,
                name: (ePort as FppElkPort).data!.name,
                // Regular SNode fields
                id: ePort.id,
                size: {
                    width: ePort.width,
                    height: ePort.height
                },
                position: {
                    x: ePort.x,
                    y: ePort.y
                },
                children: [],
            };

            // Push the built child into the children array.
            sNode.children?.push(sPort);
        });
    }
}