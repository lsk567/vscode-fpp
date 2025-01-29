import * as vscode from 'vscode';
import * as Settings from './settings';

export interface LocsQuickPickOpen extends vscode.QuickPickItem {
    kind: vscode.QuickPickItemKind.Default;
    isOpen: true;
}

export interface LocsQuickPickFile extends vscode.QuickPickItem {
    kind: vscode.QuickPickItemKind.Default;
    isOpen: false;
    uri: vscode.Uri;
}

export interface LocsQuickPickSeparator extends vscode.QuickPickItem {
    kind: vscode.QuickPickItemKind.Separator;
}

export type LocsQuickPickItem = LocsQuickPickOpen | LocsQuickPickFile | LocsQuickPickSeparator;

export function locs(context: vscode.ExtensionContext) {
    return context.workspaceState.get<string>("fpp.locsFile");
}
