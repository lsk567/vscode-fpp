/**
 * This file manages all interactions with the live Sprotty diagram in the webview.
 * 
 * The interactions include: 
 * 
 * 1. the extension responding to messages coming from the webview
 * (i.e., handlers registered to WebviewEndpoint under FppWebviewPanelManager);
 * 
 * 2. the extension actively sending messages to the webview, upon user request
 * from the CodeLens buttons (buttons floating above definitions).
 */
import { createFileUri, createWebviewPanel, SprottyDiagramIdentifier, WebviewEndpoint, WebviewPanelManager, WebviewPanelManagerOptions } from "sprotty-vscode";
import { RequestModelAction, SGraph, SEdge, SNode, SetModelAction } from 'sprotty-protocol';
import * as vscode from "vscode";
import { FppProject } from "./project";
import { DeclCollector } from "./decl";
import { ComponentNode } from "../../webview/src/models";

export class FppWebviewPanelManager extends WebviewPanelManager {
    constructor(readonly options: WebviewPanelManagerOptions, readonly fppProject: FppProject) {
        super(options);
    }

    protected override createWebview(identifier: SprottyDiagramIdentifier): vscode.WebviewPanel {
        const extensionPath = this.options.extensionUri.fsPath;
        // Let the extension look for webview JS and CSS at the top-level pack/webview directory.
        const webviewResources = createFileUri(extensionPath, '..', '..', 'pack', 'webview');
        return createWebviewPanel(identifier, {
            localResourceRoots: [ webviewResources ],
            scriptUri: createFileUri(webviewResources.fsPath, 'webview.js'),
            cssUri: createFileUri(webviewResources.fsPath, 'webview.css'),
        });
    }

    /**
     * Create an endpoint to the webview and register handlers of incoming messages from the webview.
     */
    protected override createEndpoint(identifier: SprottyDiagramIdentifier): WebviewEndpoint {
        const activeWebview = super.createEndpoint(identifier);
        if (activeWebview) {
            console.log("Active webview");
        } else {
            console.log("Inactive webview!");
        }
        this.addRequestModelHandler(activeWebview); 
        return activeWebview;
    }

    /************************************************************/
    /***** Handlers for responding to messages from webview *****/
    /************************************************************/

    /**
     * This function registers a handler for RequestModelAction from the frontend webview.
     * Webview sends RequestModelAction at initialization.
     * This handler should construct an SGraph and send it to webview.
     * In the future, when parsing is done in the language server, this handler and SGraph
     * generation should be moved to the language server too.
     * The implementation of this function is modeled after addWorkspaceEditActionHandler().
     */
    protected addRequestModelHandler(endpoint: WebviewEndpoint) {
        const handler = async (action: RequestModelAction) => {
            console.log("Received RequestModelAction: ", action);
            console.log("Generate SGraph...");
            const graph = SGraphGenerator.allComponents(this.fppProject.decl);
            const msg = SetModelAction.create(graph);
            await endpoint.sendAction(msg);
            console.log("Send back msg: ", msg);
        };
        endpoint.addActionHandler(RequestModelAction.KIND, handler);
    }

    /*********************************************************************************/
    /***** Handlers for sending messages to webview upon user's CodeLens actions *****/
    /*********************************************************************************/

    public codeLensVisualizeConnectionGroup(args: any[]) {
        const connectionGroupName = args[0];
        vscode.window.setStatusBarMessage(`Visualizing ${connectionGroupName}...`, 5000);
        console.log("this.fppProject = ", this.fppProject);
        // Generate an SGraph for the connection group.
        const graph = SGraphGenerator.connectionGroup(this.fppProject.decl, connectionGroupName);
        const msg = SetModelAction.create(graph);
        var activeEndpoint = undefined;
        if (this.endpoints.length > 0) {
            activeEndpoint = this.endpoints[0];
        }
        if (activeEndpoint) {
            activeEndpoint.sendAction(msg);
            console.log("Sending back msg: ", msg);
        } else {
            console.log("Active endpoint not found!");
        }
    }
}

export class SGraphGenerator {
    
    /**
     * Initialize an SGraph to be modified.
     * @returns an empty graph
     */
    static initGraph(): SGraph {
        return {
            type: 'graph',
            id: 'graph',
            children: []
        };
    }

    /**
     * Generate an SGraph that shows all components.
     * @param decl The DeclCollector with all info about the FPP files
     * @returns An SGraph to be sent to webview
     */
    static allComponents(decl: DeclCollector): SGraph {
        const graph: SGraph = this.initGraph();
        Array.from(decl.componentInstances.entries()).forEach(([key, comp], index) => {
            // console.log(comp);
            const node = <SNode & ComponentNode>{
                type: 'component',
                id: key,
                name: comp.name.value,
                position: { x: 0, y: index * 100 },
                size: { width: 81, height: 50 }   // Golden ratio = 1.618
            };
            graph.children.push(node);
        });
        return graph;
    }

    /**
     * Generate an SGraph that shows a specific connection group.
     * @param decl The DeclCollector with all info about the FPP files
     * @param connectionGroupName Name of the connection group to generate the graph for
     * @returns An SGraph to be sent to webview
     */
    static connectionGroup(decl: DeclCollector, connectionGroupName: string): SGraph {
        const graph: SGraph = {
            type: 'graph',
            id: 'graph',
            children: []
        };
        // const graph: SGraph = this.initGraph();

        return graph;
    }
}