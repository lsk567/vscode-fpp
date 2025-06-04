import '../css/diagram.css';
import 'sprotty/css/sprotty.css';

import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, overrideViewerOptions, PolylineEdgeView, RectangularNodeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, TYPES } from 'sprotty';
import { ComponentNodeView } from './views';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    configureModelElement(context, 'component', SNodeImpl, ComponentNodeView);
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