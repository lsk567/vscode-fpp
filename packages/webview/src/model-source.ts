import { SGraph, SEdge, SNode } from "sprotty-protocol";
import { TaskNode } from "./models";

export const graph: SGraph = {
    type: 'graph',
    id: 'graph',
    children: [
        <SNode & TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            isRunning: false,
            position: { x: 0, y: 0 },
            size: { width: 10, height: 10 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task02',
            name: 'Second Task',
            isFinished: false,
            isRunning: true,
            position: { x: 20, y: 0 },
            size: { width: 20, height: 20 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task03',
            name: 'Third Task',
            isFinished: false,
            isRunning: false,
            position: { x: 50, y: 0 },
            size: { width: 30, height: 30 }
        },
        // <SEdge>{
        //     type: 'edge',
        //     id: 'edge01',
        //     sourceId: 'task01',
        //     targetId: 'task02',
        //     routerKind: 'manhattan',
        // }
    ]
};