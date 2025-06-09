import 'sprotty/css/sprotty.css';
import '../css/diagram.css';

import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, layoutableChildFeature, loadDefaultModules, overrideViewerOptions, PolylineEdgeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, SPortImpl } from 'sprotty';
import { ComponentNodeView, PortView } from './views';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    // FIXME: When ELK is integrated, disable layoutableChildFeature.
    configureModelElement(context, 'component', SNodeImpl, ComponentNodeView, {enable: [layoutableChildFeature]});
    configureModelElement(context, 'port', SPortImpl, PortView);
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
    configureViewerOptions(context, {
        needsClientLayout: false, // Whether client-side micro-layout is needed.
        needsServerLayout: true,  // If true, webview sends back ComputedBoundsAction upon RequestBoundsAction.
    });
});

export const createFppContainer = (containerId: string) => {

    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule);
    overrideViewerOptions(container, {
        baseDiv: containerId,
    });

    return container;
};