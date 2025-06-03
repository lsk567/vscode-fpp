import { createFileUri, createWebviewPanel, SprottyDiagramIdentifier, WebviewPanelManager } from "sprotty-vscode";
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
}