/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl } from 'sprotty';
import { Selectable } from 'sprotty-protocol';
import { TaskNode } from './models';

@injectable()
export class TaskNodeView implements IView {
    render(node: Readonly<SNodeImpl & TaskNode & Selectable>, context: RenderingContext): VNode {
        return <g>
            <rect class-sprotty-node={true} class-task={true}
                class-running={node.isRunning}
                class-finished={node.isFinished}
                class-selected={node.selected}
                width={node.size.width}
                height={node.size.height}
            >
            </rect>
            <text x={node.position.x} y={node.position.y + 5}>{node.name}</text>
        </g>;
    }
}