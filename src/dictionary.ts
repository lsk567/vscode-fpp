import * as vscode from 'vscode';
import * as Fpp from './parser/ast';

import { DeclCollector, FppTokenType, tokenTypeNames } from './decl';
import { MemberTraverser } from './traverser';
import { ConsolidatingItem, ConsolidatingTree } from './consolidate';


abstract class DictionaryEntry implements ConsolidatingItem {
    abstract name: string;
    children: DictionaryEntry[] = [];

    abstract getChildren(): DictionaryEntry[];
    abstract asTreeItem(): vscode.TreeItem;
}

class ComponentModuleTree extends DictionaryEntry {
    constructor(
        readonly name: string
    ) {
        super();
    }

    getChildren(): DictionaryEntry[] {
        return this.children;
    }

    asTreeItem(): vscode.TreeItem {
        const out = new vscode.TreeItem(this.name, vscode.TreeItemCollapsibleState.Collapsed);
        out.iconPath = new vscode.ThemeIcon('symbol-namespace');
        return out;
    }
}

abstract class DictionaryDecl<T extends Fpp.Decl> extends DictionaryEntry {
    name: string;
    abstract token: FppTokenType;

    constructor(readonly decl: T) {
        super();
        this.name = this.decl.name.value;
    }

    asTreeItem(): vscode.TreeItem {
        const name = MemberTraverser.flat(this.decl.scope, this.decl.name);

        const out = new vscode.TreeItem(this.decl.name.value);
        out.description = tokenTypeNames[this.token];
        out.tooltip = `${name} (${tokenTypeNames[this.token]})`;

        const location = MemberTraverser.asLocation(this.decl.name.location);
        out.command = {
            title: "Go-To Definition",
            command: 'vscode.open',
            arguments: [
                location.uri,
                { selection: location.range }
            ]
        };

        return out;
    }

    getChildren(): DictionaryEntry[] {
        return [];
    }
}

class DictionaryComponent extends DictionaryDecl<Fpp.ComponentDecl> {
    token = FppTokenType.component;

    asTreeItem(): vscode.TreeItem {
        const out = super.asTreeItem();
        out.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        out.iconPath = new vscode.ThemeIcon('symbol-class');

        return out;
    }

    getChildren(): DictionaryEntry[] {
        const out: DictionaryEntry[] = [];

        if (this.decl.commands) {
            for (const cmd of this.decl.commands.values()) {
                out.push(new DictionaryCommand(cmd));
            }
        }

        if (this.decl.events) {
            for (const event of this.decl.events.values()) {
                out.push(new DictionaryEvent(event));
            }
        }

        if (this.decl.parameters) {
            for (const param of this.decl.parameters.values()) {
                out.push(new DictionaryParameter(param));
            }
        }

        if (this.decl.telemetry) {
            for (const tlm of this.decl.telemetry.values()) {
                out.push(new DictionaryTelemetry(tlm));
            }
        }

        return out;
    }
}

class DictionaryCommand extends DictionaryDecl<Fpp.CommandDecl> {
    token = FppTokenType.command;

    asTreeItem(): vscode.TreeItem {
        const out = super.asTreeItem();
        out.iconPath = new vscode.ThemeIcon('symbol-function');
        return out;
    }
}

class DictionaryEvent extends DictionaryDecl<Fpp.EventDecl> {
    token = FppTokenType.event;

    asTreeItem(): vscode.TreeItem {
        const out = super.asTreeItem();
        out.iconPath = new vscode.ThemeIcon('symbol-string');
        return out;
    }
}

class DictionaryParameter extends DictionaryDecl<Fpp.ParamDecl> {
    token = FppTokenType.parameter;

    asTreeItem(): vscode.TreeItem {
        const out = super.asTreeItem();
        out.iconPath = new vscode.ThemeIcon('symbol-property');
        return out;
    }
}

class DictionaryTelemetry extends DictionaryDecl<Fpp.TelemetryChannelDecl> {
    token = FppTokenType.telemetry;

    asTreeItem(): vscode.TreeItem {
        const out = super.asTreeItem();
        out.iconPath = new vscode.ThemeIcon('symbol-field');
        return out;
    }
}

export class ComponentsProvider implements vscode.TreeDataProvider<DictionaryEntry> {
    constructor(readonly decl: DeclCollector) { }

    private _onDidChangeTreeData = new vscode.EventEmitter<void>();
    readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: DictionaryEntry): vscode.TreeItem {
        return element.asTreeItem();
    }

    getChildren(element?: DictionaryEntry | undefined): vscode.ProviderResult<DictionaryEntry[]> {
        if (element) {
            return element.getChildren();
        } else {
            // Collect up all the components that sit in the project
            const out = new ConsolidatingTree<DictionaryEntry>();
            for (const comp of this.decl.components.values()) {
                const name = MemberTraverser.flat(comp.scope, comp.name);
                out.set(name, new DictionaryComponent(comp));

                // Add all the modules up to this point
                const scope: string[] = [];
                for (const tok of comp.scope) {
                    scope.push(tok.value);
                    const scopeName = scope.join('.');
                    if (!out.has(scopeName)) {
                        out.set(scopeName, new ComponentModuleTree(tok.value));
                    }
                }
            }

            out.consolidate();
            return out.all();
        }
    }
}
