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
import { RequestModelAction, ComputedBoundsAction, UpdateModelAction, FitToScreenAction, SGraph, RequestBoundsAction, applyBounds } from 'sprotty-protocol';
import * as vscode from "vscode";
import { FppProject } from "../project";
import { GraphGenerator } from "./generator";
import { ElkLayoutEngine } from "sprotty-elk/lib/elk-layout";
import ELK from 'elkjs/lib/elk-api.js';
import { FppLayoutEngine } from "./layout";
import { FppDiagramLayoutConfigurator } from "./layout-config";

export enum DiagramType {
    Component,
    ConnectionGroup,
    Topology
}

type DiagramOptions = {
    hideUnconnectedPorts?: boolean;
};

export class FppWebviewPanelManager extends WebviewPanelManager {

    private sGraph: SGraph | undefined;
    private diagramConfig: FppDiagramLayoutConfigurator = new FppDiagramLayoutConfigurator();
    private elkEngine: ElkLayoutEngine = new FppLayoutEngine(
        () => new ELK({
            workerFactory: function (url) { // the value of 'url' is irrelevant here
                const { Worker } = require('elkjs/lib/elk-worker.min.js'); // Use elk-worker.js for debugging
                return new Worker(url);
            }
        }),
        undefined,
        this.diagramConfig);

    /**
     * Private variables for remembering the current displayed diagram
     * (for update on save) and diagram options 
     */
    private currentDiagramType: DiagramType | undefined;
    private fullyQualifiedName: string = "";
    private diagramOptions: DiagramOptions = {
        hideUnconnectedPorts: true
    };

    constructor(readonly options: WebviewPanelManagerOptions, readonly fppProject: FppProject) {
        super(options);
    }

    protected override createWebview(identifier: SprottyDiagramIdentifier): vscode.WebviewPanel {
        const extensionPath = this.options.extensionUri;
        // Let the extension look for webview JS and CSS under root/out/pack/webview/
        const webviewResources = vscode.Uri.joinPath(extensionPath, 'dist');
        return createWebviewPanel(identifier, {
            localResourceRoots: [webviewResources],
            scriptUri: vscode.Uri.joinPath(webviewResources, 'webview.js')
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
        this.addComputedBoundsHandler(activeWebview);
        return activeWebview;
    }

    /****************************************************/
    /* Handlers for responding to messages from webview */
    /****************************************************/

    /**
     * This function registers a handler for RequestModelAction from the frontend webview.
     * When the user clicks any code lens button, the webview should pop up.
     * When the webview initializes, it sends RequestModelAction to the extension.
     * Based on which code lens the user clicked, this handler constructs a corresponding
     * SGraph and send it back to webview. When the telescope button is pressed,
     * the webview starts and nothing should be displayed.
     */
    protected addRequestModelHandler(endpoint: WebviewEndpoint) {
        const handler = async (action: RequestModelAction) => {
            switch (this.currentDiagramType) {
                case DiagramType.Component:
                    this.sGraph = await GraphGenerator.component(
                        this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                    break;
                case DiagramType.ConnectionGroup:
                    this.sGraph = await GraphGenerator.connectionGroup(
                        this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                    break;
                case DiagramType.Topology:
                    this.sGraph = await GraphGenerator.topology(
                        this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                    break;
            }
            if (!this.sGraph) {
                console.error("Empty sGraph!");
                return;
            }
            const msgRequestBounds = RequestBoundsAction.create(this.sGraph);
            await endpoint.sendAction(msgRequestBounds);
        };
        endpoint.addActionHandler(RequestModelAction.KIND, handler);
    }

    /**
     * This handler is invoked when the front-end returns a ComputedBoundsAction.
     * The handler applies the measured bounds of DOM elements
     * (component boxes, text labels, etc.) to the unbounded SGraph,
     * then sends the SGraph to the ELK layout engine. The SGraph after layout
     * is then returned to the webview for display.
     * 
     * Note that since all graphs go through the two-step client-server layout process
     * (more info here https://sprotty.org/docs/recipes/actions-and-protocols/#3-client-and-server-layout)
     * this handler gets invoked for every render.
     * 
     * @param endpoint An active endpoint connecting to the webview
     */
    protected addComputedBoundsHandler(endpoint: WebviewEndpoint) {
        const handler = async (action: ComputedBoundsAction) => {
            // Apply bounds to SGraph.
            if (!this.sGraph) {
                console.error("SGraph is not set but computed bounds received!");
                return;
            }
            applyBounds(this.sGraph, action);
            // Layout the SGraph (transforming to ElkGraph and calls ELK under the hood).
            this.sGraph = await this.elkEngine.layout(this.sGraph);
            this.sendUpdateAndFitActions(endpoint, this.sGraph);
        };
        endpoint.addActionHandler(ComputedBoundsAction.KIND, handler);
    }

    /**************************************************************************/
    /* Handlers for sending messages to webview upon user's actions in editor */
    /**************************************************************************/

    /**
     * Display a diagram by generating an SGraph and sending a RequestBoundsAction to the webview.
     * This function is invoked when codelens buttons are clicked.
     * 
     * @param diagramType The type of diagram to be rendered: component, connection group, or topology.
     * @param fullyQualifiedName The full name of an entity to be rendered. The name must be a valid key of one of declCollector's maps.
     */
    public async displayDiagram(diagramType: DiagramType, fullyQualifiedName: string) {
        // Do not render if errors are detected in the editor. Diagrams can be incorrect when there are errors.
        if (await this.errorsDetectedInCurrentEditor()) return;
        // Store diagram type and fully qualified name for potential re-render on save.
        this.currentDiagramType = diagramType;
        this.fullyQualifiedName = fullyQualifiedName;
        // Check if webview is active.
        let activeEndpoint = this.findOpenedWebview();
        if (!activeEndpoint) {
            this.openDiagramFromCurrentEditor();
            // If it is the first time webview is opened,
            // the webview sends a requestModel action to the extension,
            // sending back the diagram is then handled in the requestModel
            // action handler. So here we simply return.
            return;
        }
        // Generate a corresponding SGraph.
        switch (diagramType) {
            case DiagramType.Component:
                this.sGraph = await GraphGenerator.component(this.fppProject.decl, this.diagramOptions, fullyQualifiedName);
                break;
            case DiagramType.ConnectionGroup:
                this.sGraph = await GraphGenerator.connectionGroup(this.fppProject.decl, this.diagramOptions, fullyQualifiedName);
                break;
            case DiagramType.Topology:
                this.sGraph = await GraphGenerator.topology(this.fppProject.decl, this.diagramOptions, fullyQualifiedName);
                break;
            default:
                vscode.window.showErrorMessage('Unsupport diagram type: ', diagramType);
                return;
        }
        vscode.window.setStatusBarMessage(`Displaying ${fullyQualifiedName}`, 5000);
        if (!this.sGraph) { return; }
        const msgRequestBounds = RequestBoundsAction.create(this.sGraph);
        activeEndpoint.sendAction(msgRequestBounds);
    }

    /**
     * Update an existing diagram by generating an SGraph and sending a RequestBoundsAction to the webview.
     * This function is invoked when the user saves an FPP file.
     */
    public async updateDiagram() {
        const activeEndpoint = this.findOpenedWebview();
        if (!activeEndpoint) {
            console.error("Active webview endpoint not found!");
            return;
        }
        // Do not render if errors are detected in the editor. Diagrams can be incorrect when there are errors.
        if (await this.errorsDetectedInCurrentEditor()) return;
        switch (this.currentDiagramType) {
            case DiagramType.Component:
                this.sGraph = await GraphGenerator.component(this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                break;
            case DiagramType.ConnectionGroup:
                this.sGraph = await GraphGenerator.connectionGroup(this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                break;
            case DiagramType.Topology:
                this.sGraph = await GraphGenerator.topology(this.fppProject.decl, this.diagramOptions, this.fullyQualifiedName);
                break;
            default:
                console.error("Unsupported DiagramType: ", this.currentDiagramType);
                return;
        }
        const msgRequestBounds = RequestBoundsAction.create(this.sGraph!);
        activeEndpoint.sendAction(msgRequestBounds);
    }

    public async toggleUnconnectedPorts() {
        this.diagramOptions.hideUnconnectedPorts = !this.diagramOptions.hideUnconnectedPorts;
        this.updateDiagram();
    }

    private findOpenedWebview(): WebviewEndpoint | undefined {
        let openedEndpoint: WebviewEndpoint | undefined = undefined;
        if (this.endpoints.length > 0) {
            openedEndpoint = this.endpoints[0];
        }
        return openedEndpoint;
    }

    private async sendUpdateAndFitActions(endpoint: WebviewEndpoint, graph: SGraph) {
        const msgUpdate = UpdateModelAction.create(graph);
        await endpoint.sendAction(msgUpdate);
        const msgFit = FitToScreenAction.create([]);
        await endpoint.sendAction(msgFit);
    }

    /**
     * Check if there are errors in the current editor.
     * These errors can cause runtime exceptions downstream in rendering.
     * For example, if an instance is undeclared but is used
     * in connection groups could lead to runtime exceptions
     * that freeze the diagram webview.
     * Also, diagrams can be incorrect when there are errors.
     * 
     * @returns True if there are errors, false otherwise
     */
    private async errorsDetectedInCurrentEditor(): Promise<boolean> {
        const currentFileUri = vscode.window.activeTextEditor?.document.uri;
        const allDiagnostics = vscode.languages.getDiagnostics();
        const fppDiagnostics = allDiagnostics.filter(diagnostic => {
            // Each element in allDiagnostics is a tuple [uri, diag]
            const uri = diagnostic[0];
            const diagArr = diagnostic[1];
            // Check if the URI is the current file in the active editor,
            // and there are items (i.e., errors) in the diagnostic array.
            return (uri.path === currentFileUri?.path)
                && diagArr.length > 0;
        });
        if (fppDiagnostics.length > 0) {
            vscode.window.showWarningMessage("Cannot render diagram due to errors in the editor. To resolve them, try clicking {} at the bottom-right corner and reload locs.fpp from a build cache.");
            return true;
        }
        return false;
    }

    private async openDiagramFromCurrentEditor(): Promise<WebviewEndpoint | undefined> {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            console.error("Cannot open diagram from the current editor because the editor is not active.");
            return;
        }
        const uri = activeEditor.document.uri;
        return this.openDiagram(uri, { reveal: true });
    }
}
