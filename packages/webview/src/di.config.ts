import 'sprotty/css/sprotty.css';
import '../css/diagram.css';

import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, layoutableChildFeature, loadDefaultModules, overrideViewerOptions, PolylineEdgeView, SEdgeImpl, SGraphImpl, SGraphView, SLabelImpl, SLabelView, SNodeImpl, SPortImpl, SRoutingHandleImpl, SRoutingHandleView } from 'sprotty';
import { ComponentNodeView, PortView, RightAlignedLabelView } from './views';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    configureModelElement(context, 'component', SNodeImpl, ComponentNodeView, {enable: [layoutableChildFeature]});
    configureModelElement(context, 'component-label', SLabelImpl, SLabelView);
    configureModelElement(context, 'port', SPortImpl, PortView);
    configureModelElement(context, 'port-label', SLabelImpl, SLabelView);
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
    configureModelElement(context, 'routing-point', SRoutingHandleImpl, SRoutingHandleView);
    configureModelElement(context, 'volatile-routing-point', SRoutingHandleImpl, SRoutingHandleView);
    configureViewerOptions(context, {
        needsClientLayout: false, // Whether client-side micro-layout is needed. We set it to false here because all layout is done by ELK.
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