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

    protected generateSprottyGraph(decl: DeclCollector): SGraph {
        const graph: SGraph = {
            type: 'graph',
            id: 'graph',
            children: []
        };
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