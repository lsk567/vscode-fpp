import * as vscode from 'vscode';

/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {

	private codeLenses: vscode.CodeLens[] = [];
	private regex: RegExp;
	private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
	public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

	constructor() {
		this.regex = /(.+)/g;

		vscode.workspace.onDidChangeConfiguration((_) => {
			this._onDidChangeCodeLenses.fire();
		});
	}

	public provideCodeLenses(document: vscode.TextDocument, _token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {

		if (vscode.workspace.getConfiguration("fpp").get("enableCodeLens", true)) {
			const lenses: vscode.CodeLens[] = [];

            const regex = /\bconnections\s+(\w+)/g;
            const text = document.getText();
            let match;

            while ((match = regex.exec(text))) {
                const line = document.positionAt(match.index).line;
                const position = new vscode.Position(line, 0);
                const range = new vscode.Range(position, position);
                const elemName = match[1];
                const lens = new vscode.CodeLens(range, {
                    title: `Visualize: ${elemName}`,
                    tooltip: 'Click to visualize this connection group',
                    command: 'fpp.visualizeConnectionGroup',
                    arguments: [elemName]
                });
                lenses.push(lens);
            }

            return lenses;
		}
		return [];
	}

    // Called right before CodeLens is rendered for the user.
	public resolveCodeLens(codeLens: vscode.CodeLens, _token: vscode.CancellationToken) {
		if (vscode.workspace.getConfiguration("fpp").get("enableCodeLens", true)) {
            // Usually for registering commands, in our case,
            // commands have been registered.
			return codeLens;
		}
		return null;
	}
}
