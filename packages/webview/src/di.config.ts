import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, overrideViewerOptions, PolylineEdgeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, TYPES } from 'sprotty';
import { TaskNodeView } from './views';

import { graph } from './model-source';

const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    console.log("isBound: ", isBound(TYPES.ModelSource));
    if (!isBound(TYPES.ModelSource)) {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
    }
    console.log("isBound 2: ", isBound(TYPES.ModelSource));

    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', SGraphImpl, SGraphView);
    configureModelElement(context, 'task', SNodeImpl, TaskNodeView);
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
});

export const createFppContainer = (containerId: string) => {

    const container = new Container();
    console.log("Hi 1");
    loadDefaultModules(container);
    console.log("Hi 2");
    container.load(myModule);
    console.log("Hi 3");
    overrideViewerOptions(container, {
        needsClientLayout: false,
        needsServerLayout: false,
        baseDiv: containerId,
    });
    console.log("Hi 4");
    // Load hard-coded model source
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    console.log("Hi 5");
    modelSource.setModel(graph);
    console.log("Hi 6");

    return container;
};