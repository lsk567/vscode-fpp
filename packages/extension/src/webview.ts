import { createFileUri, createWebviewPanel, SprottyDiagramIdentifier, WebviewEndpoint, WebviewPanelManager } from "sprotty-vscode";
import { RequestModelAction } from 'sprotty-protocol';
import * as vscode from "vscode";

export class FppWebviewPanelManager extends WebviewPanelManager {
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
            const msg = {
                kind: 'asdf',
                elementIds: [],
                animate: true
            };
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