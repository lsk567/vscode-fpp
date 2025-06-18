import { SGraph, SEdge, SNode, SPort, Point, SLabel, Dimension } from 'sprotty-protocol';
import ELK, { ElkExtendedEdge, ElkGraphElement, ElkLabel, ElkNode, ElkPort } from 'elkjs/lib/elk.bundled.js';
import { DeclCollector, SymbolType } from "../decl";
import { ComponentDecl, ComponentInstanceDecl, Connection, DirectGraphDecl, GeneralInputPortInstance, GeneralPortKind, IncludeStmt, PortInstanceDecl, QualifiedIdentifier, SpecialOutputPortInstance, SpecialPortKind } from "../parser/ast";
import { MemberTraverser } from "../traverser";
import { ComponentSNode, PortSNode } from '../../../webview/src/models';
import fs from 'fs';

const elk = new ELK();

/** 
 * The additional FPP information attached to ELK nodes
 * when creating ELK nodes from decl collector
 */
interface FppData {
    SNodeType:      string,
    componentKind?: string, // active, queued, passive
    portKind?:      string, // Tracking kind of GeneralInputPortInstance and GeneralInputPortInstance
}

/** An FPP ELK node is a regular ElkNode with an extra data field containing FPP info. */
interface FppElkNode extends ElkNode {
    data?: FppData
}

interface FppElkPort extends ElkPort {
    data?: FppData
}

interface FppElkEdge extends ElkExtendedEdge {
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
            layoutOptions: {
                'elk.algorithm': 'layered',
                "elk.hierarchyHandling": "INCLUDE_CHILDREN",
            },
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
        const topologyToElkNodeMap = new Map<string, FppElkNode>();

        // Push topology ELK nodes into a map (each key is the topology's fully qualified name),
        // so that we can later find the right topology to push components into.
        // NOTE: This assumes that there is a unique topology under a scope/module!
        decl.topologies.forEach(topology => {
            const topologyScope: string
                = `${MemberTraverser.flat(topology.scope)}`;
            topologyToElkNodeMap.set(
                topologyScope,
                <FppElkNode>{
                    id: topologyScope,
                    children: [],
                    data: {
                        SNodeType: 'topology',
                    }
                }
            );
        });
        
        // Create an ELK node for each component instance,
        // and add it to one of the topologies.
        decl.componentInstances.forEach(compInstance => {
            const elkCompNode = this.createElkNodeFromComponentInstance(decl, compInstance);
            const compInstanceScope = `${MemberTraverser.flat(compInstance.scope)}`;
            console.log(`compInstance ${compInstance.name.value} has scope ${compInstanceScope}`);
            topologyToElkNodeMap.get(compInstanceScope)?.children?.push(elkCompNode);
        });

        // Push all topologies into the children.
        topologyToElkNodeMap.forEach((topologyElkNode, key) => {
            elkGraph.children?.push(topologyElkNode);
        });

        // Iterate over all connections and draw an ELK edge for each.
        decl.graphGroups.forEach((directGraphDecl, key) => {
            directGraphDecl.connections.forEach((conn, idx) => {
                const edge: FppElkEdge = this.createElkEdge(decl, directGraphDecl, conn, idx);
                elkGraph.edges?.push(edge);
            });
        });

        console.log("ElkGraph constructed: ", elkGraph);

        const jsonString = JSON.stringify(elkGraph, null, 4);

        const outputFilePath: string = 'output.json';

        try {
            fs.writeFileSync(outputFilePath, jsonString, 'utf8');
            console.log(`Data written to ${outputFilePath} as JSON.`);
        } catch (err) {
            console.error(err);
        }

        // Perform layout
        await elk.layout(elkGraph)
            .then(g => {
                console.log("ElkGraph after layout: ", elkGraph);
            })
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
    static async connectionGroup(decl: DeclCollector, graphGroupName: string): Promise<SGraph> {
        const elkGraph: FppElkNode = this.initElkGraph();
        const graphGroup = decl.graphGroups.get(graphGroupName)!;
        if (!graphGroup) {
            throw new Error(`Graph group not found: ${graphGroupName}`);
        }

        // Collect a unique set of instance IDs from connections.
        const compSet = new Set<string | undefined>();
        graphGroup.connections.forEach(conn => {
            // Remove the trailing port name.
            const source = MemberTraverser.flat(conn.source.node.slice(0, -1));
            const destination = MemberTraverser.flat(conn.destination.node.slice(0, -1));
            compSet.add(source);
            compSet.add(destination);
        });

        // Convert component IDs into component instances.
        const scope = graphGroup.scope.map(e => e.value).join('.');
        const compInstances: ComponentInstanceDecl[] = [];
        compSet.forEach(e => {
            // See if this component is defined under the current scope.
            let instance = decl.componentInstances.get(`${scope}.${e}`);
            if (instance) {
                compInstances.push(instance);
                return;
            }
            // If not, see if this component is imported.
            instance = decl.componentInstances.get(`${e}`);
            if (instance) {
                compInstances.push(instance);
            }
        });

        // Generate a component ELK node for each component instance.
        compInstances.forEach(e => {
            elkGraph.children?.push(this.createElkNodeFromComponentInstance(decl, e));
        });

        // Draw all connections in this connection group.
        graphGroup.connections.forEach((conn, idx) => {
            const edge: FppElkEdge = this.createElkEdge(decl, graphGroup, conn, idx);
            elkGraph.edges?.push(edge);
        });

        // Perform layout
        await elk.layout(elkGraph)
            .then(console.log)
            .catch(console.error);

        // Convert to SGraph
        const sGraph: SGraph = this.convertElkGraphToSGraph(elkGraph);

        return sGraph;
    }

    /************************************************************/
    /* Helper functions for generating ELK / Sprotty components */
    /************************************************************/

    static createElkNodeFromComponentInstance(decl: DeclCollector, componentInstanceDecl: ComponentInstanceDecl): FppElkNode {
        // For each instance, look up the ComponentDecl.
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
        const node = this.createElkNodeComponent(componentInstanceDecl, componentDecl);
        return node;
    }

    /**
     * A helper method for building an Sprotty model for an FPP component
     * @param comp ComponentDecl from decl collector
     * @param uid Component instance name, which is supposed to be unique.
     */
    static createElkNodeComponent(instance: ComponentInstanceDecl, comp: ComponentDecl): FppElkNode {
        // Instantiate an SNode for the component.
        const compId = `${instance.scope.map(e => e.value).join('.')}.${instance.name.value}`; // DeploymentName.componentInstanceName
        const compClassName = comp.name.value;
        const compInstanceName = instance.name.value;
        var node: FppElkNode = {
            id: compId,
            layoutOptions: {
                "elk.nodeLabels.placement": "INSIDE, H_CENTER, V_CENTER",
                "elk.portLabels.placement": "NEXT_TO_PORT_OF_POSSIBLE",
                "elk.portLabels.nextToPortIfPossible": 'true',
                'elk.portConstraints': 'FIXED_SIDE', // So that elk.port.side can take effect.
                "elk.nodeSize.constraints": "PORTS, NODE_LABELS, MINIMUM_SIZE",
                "elk.spacing.labelPortHorizontal": "5",
            },
            children: [],
            ports: [],
            labels: [
                <ElkLabel>{
                    text: compInstanceName,
                    width: 100,
                    height: 15,
                },
                <ElkLabel>{
                    text: compClassName,
                    width: 100,
                    height: 15,
                },
            ],
            data: {
                SNodeType: 'component',
                componentKind: comp.kind.value,
            }
        };

        // Add an Elk port to the ports array for each port of the component.
        comp.members.forEach((val, i) => {
            if (GraphGenerator.isPortInstanceDecl(val)) {
                const portId = `${compId}.${val.name.value}`;
                node.ports!.push(GraphGenerator.createElkNodePort(val, portId));
            } else if (GraphGenerator.isIncludeStmt(val)) {
                val.resolved?.members.forEach(member => {
                    if (GraphGenerator.isPortInstanceDecl(member)) {
                        const portId = `${compId}.${member.name.value}`;
                        node.ports!.push(GraphGenerator.createElkNodePort(member, portId));
                    }
                });
            }
        });

        return node;
    }

    static createElkNodePort(port: PortInstanceDecl, uid: string): FppElkPort {
        const portName = port.name.value;
        let portKind = "";
        if (port.kind.isSpecial && port.kind.isOutput) {
            portKind = (port.kind as SpecialOutputPortInstance).kind.value;
        }
        else if (!port.kind.isSpecial && !port.kind.isOutput) {
            portKind = (port.kind as GeneralInputPortInstance).kind.value;
        }

        const portNode: FppElkPort = {
            id: uid,
            height: 10,
            width: 10,
            layoutOptions: {
                'elk.port.side': port.kind.isOutput ? 'EAST' : 'WEST',
            },
            labels: [
                // For now, each port label has fix width and height.
                // If size is not set, ELK sets it to 0, 0, not ideal.
                <ElkLabel>{
                    text: portName,
                    width: 50,
                    height: 10,
                }
            ],
            data: {
                SNodeType: 'port',
                portKind: portKind,
            }
        };
        return portNode;
    }

    static createElkEdge(decl: DeclCollector, directGraphDecl: DirectGraphDecl, conn: Connection, idx: number): FppElkEdge {
        const scope = directGraphDecl.scope;
        // Check if the scope contains the first identifier included in the port QualifiedIdentifier.
        // If so, the component (also the port) is defined under the scope.
        // Otherwise, the component (also the port) is external (e.g., imported by subtopologies).
        // In that case, do not prepend the scope.
        const sourceId = conn.source.node;
        const sourceFirstId: QualifiedIdentifier = [sourceId[0]];
        const sourceResolve = decl.resolve(sourceFirstId, scope, SymbolType.componentInstance);
        let sourceFullyQualifiedName = sourceResolve
            ? `${MemberTraverser.flat(scope)}.${MemberTraverser.flat(sourceId)}`
            : MemberTraverser.flat(sourceId);

        const destId = conn.destination.node;
        const destFirstId: QualifiedIdentifier = [destId[0]];
        const destResolve = decl.resolve(destFirstId, scope, SymbolType.componentInstance);
        let destFullyQualifiedName = destResolve
            ? `${MemberTraverser.flat(scope)}.${MemberTraverser.flat(destId)}`
            : MemberTraverser.flat(destId);
        
        const connId = `${scope}.${directGraphDecl.name.value}.connection.${idx}`;
        const edge: FppElkEdge = {
            id: connId,
            sources: [
                sourceFullyQualifiedName
            ],
            targets: [
                destFullyQualifiedName
            ],
            data: {
                SNodeType: 'edge',
            }
        };
        return edge;
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
     * A type guard function for checking whether an object can be
     * safely treated as an IncludeStmt type.
     * Caution: This needs to update when `ast.ts` is changed.
     */
    static isIncludeStmt(obj: any): obj is IncludeStmt<undefined> {
        return obj && (obj.type === 'IncludeStmt');
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
            const elkComp = eChild as FppElkNode
            const sChild = <ComponentSNode>{
                // Regular SNode fields
                type: elkComp.data!.SNodeType,
                id: elkComp.id,
                size: {
                    width: elkComp.width,
                    height: elkComp.height
                },
                position: {
                    x: elkComp.x,
                    y: elkComp.y
                },
                children: [],
                // Fields defined in webview/models
                // Here we grab data from the extended ELK nodes
                // and put them in the generated SNode.
                kind: elkComp.data?.componentKind,
            };

            // Convert all node labels into SLabel.
            const labels = this.convertElkElementLabelsToSGraphLabels(elkComp, 'component');
            sChild.children?.push(...labels);

            // Recursive on this child.
            this.convertElkGraphToSGraphRecursive(sChild, elkComp);

            // Push the built child into the children array.
            sNode.children?.push(sChild);
        });

        // Convert each ELK port into an SNode
        eNode.ports?.forEach(ePort => {
            const elkPort = ePort as FppElkPort;
            const sPort = <PortSNode>{
                // Regular SNode fields
                type: elkPort.data!.SNodeType,
                id: elkPort.id,
                size: {
                    width: elkPort.width,
                    height: elkPort.height
                },
                position: {
                    x: elkPort.x,
                    y: elkPort.y
                },
                children: [],
                // Fields defined in webview/models
                // Here we grab data from the extended ELK nodes
                // and put them in the generated SNode.
                kind: elkPort.data?.portKind,
            };

            // Convert all port labels into SLabel.
            const labels = this.convertElkElementLabelsToSGraphLabels(ePort, 'port');
            sPort.children?.push(...labels);

            // Push the built child into the children array.
            sNode.children?.push(sPort);
        });

        // Convert each ELK edge into an SNode
        eNode.edges?.forEach(eEdge => {
            const sEdge = <SEdge>{
                // Fields defined in webview/models
                type: (eEdge as FppElkEdge).data!.SNodeType,

                // Regular SEdge fields
                id: eEdge.id,
                sourceId: eEdge.sources[0],
                targetId: eEdge.targets[0],
            };

            // Referenced from sprotty-elk/src/elk-layout.ts.
            const points: Point[] = [];
            if (eEdge.sections && eEdge.sections.length > 0) {
                const section = eEdge.sections[0];
                if (section.startPoint) {
                    points.push(section.startPoint);
                }
                if (section.bendPoints) {
                    points.push(...section.bendPoints);
                }
                if (section.endPoint) {
                    points.push(section.endPoint);
                }
            }

            sEdge.routingPoints = points;

            // Convert all edge labels into SLabel.
            const labels = this.convertElkElementLabelsToSGraphLabels(eEdge, 'edge');
            sEdge.children?.push(...labels);

            // Push the built child into the children array.
            sNode.children?.push(sEdge);
        });
    }

    static convertElkElementLabelsToSGraphLabels(elkElement: ElkGraphElement, typePrefix: string) {
        const labels: SLabel[] = [];
        elkElement.labels?.forEach((e, i) => {
            const label = <SLabel>{
                id: `${elkElement.id}.label.${i}`,
                type: `${typePrefix}-label`,
                text: e.text,
                position: <Point>{
                    x: e.x || 0,
                    y: e.y || 0,
                },
                size: <Dimension>{
                    width: e.width || 0,
                    height: e.height || 0,
                },
            };
            labels.push(label);
        });
        return labels;
    }
}