import { createFileUri, createWebviewPanel, SprottyDiagramIdentifier, WebviewPanelManager } from "sprotty-vscode";
import * as vscode from "vscode";

export class FppWebviewPanelManager extends WebviewPanelManager {
    protected override createWebview(identifier: SprottyDiagramIdentifier): vscode.WebviewPanel {
        console.log("In FppWebviewPanelManager::createWebview!");
        const extensionPath = this.options.extensionUri.fsPath;
        console.log("webview.js path: ", createFileUri(extensionPath, 'pack', 'webview.js'));
        return createWebviewPanel(identifier, {
            localResourceRoots: [ createFileUri(extensionPath, 'pack') ],
            scriptUri: createFileUri(extensionPath, 'pack', 'webview.js')
        });
    }
}