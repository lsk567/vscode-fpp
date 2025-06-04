import { createFileUri, createWebviewPanel, SprottyDiagramIdentifier, WebviewEndpoint, WebviewPanelManager, WebviewPanelManagerOptions } from "sprotty-vscode";
import { RequestModelAction, SGraph, SEdge, SNode, SetModelAction } from 'sprotty-protocol';
import * as vscode from "vscode";
import { FppProject } from "./project";
import { DeclCollector } from "./decl";
import { TaskNode } from "./diagram/models";

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

    protected generateSprottyGraph(decl: DeclCollector): SGraph {
        console.log("decl: ", decl);
        const graph: SGraph = {
            type: 'graph',
            id: 'graph',
            children: [
                <SNode & TaskNode>{
                    type: 'task',
                    id: 'task01',
                    name: 'First Task',
                    isFinished: true,
                    isRunning: false,
                    position: { x: 0, y: 0 },
                    size: { width: 10, height: 10 }
                },
                <SNode & TaskNode>{
                    type: 'task',
                    id: 'task02',
                    name: 'Second Task',
                    isFinished: false,
                    isRunning: true,
                    position: { x: 20, y: 0 },
                    size: { width: 20, height: 20 }
                },
                <SNode & TaskNode>{
                    type: 'task',
                    id: 'task03',
                    name: 'Third Task',
                    isFinished: false,
                    isRunning: false,
                    position: { x: 50, y: 0 },
                    size: { width: 30, height: 30 }
                },
                // <SEdge>{
                //     type: 'edge',
                //     id: 'edge01',
                //     sourceId: 'task01',
                //     targetId: 'task02',
                //     routerKind: 'manhattan',
                // }
            ]
        };
        return graph;
    }

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
            const graph = this.generateSprottyGraph(this.fppProject.decl);
            const msg = SetModelAction.create(graph);
            await endpoint.sendAction(msg);
            console.log("Send back msg: ", msg);
        };
        endpoint.addActionHandler(RequestModelAction.KIND, handler);
    }

    // Register handlers of webview messages here.
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
}