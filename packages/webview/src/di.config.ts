import 'sprotty/css/sprotty.css';
import '../css/diagram.css';

import { Container, ContainerModule } from 'inversify';
import { CircularNodeView, configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, overrideViewerOptions, PolylineEdgeView, RectangularNodeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, SPortImpl, TYPES } from 'sprotty';
import { ComponentNodeView, SPortView } from './views';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    configureModelElement(context, 'component', SNodeImpl, ComponentNodeView);
    configureModelElement(context, 'port', SPortImpl, SPortView);
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
});

export const createFppContainer = (containerId: string) => {

    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule);
    overrideViewerOptions(container, {
        needsClientLayout: false,
        needsServerLayout: false,
        baseDiv: containerId,
    });
    

    return container;
};