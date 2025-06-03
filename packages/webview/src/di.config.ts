import '../css/diagram.css';
import 'sprotty/css/sprotty.css';

import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, overrideViewerOptions, PolylineEdgeView, RectangularNodeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, TYPES } from 'sprotty';
import { TaskNodeView } from './views';

import { graph } from './model-source';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    configureModelElement(context, 'task', SNodeImpl, TaskNodeView);
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
    // Load hard-coded model source
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel(graph);

    return container;
};