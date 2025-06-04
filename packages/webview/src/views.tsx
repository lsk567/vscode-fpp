/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl } from 'sprotty';
import { Selectable } from 'sprotty-protocol';
import { ComponentNode } from './models';

@injectable()
export class ComponentNodeView implements IView {
    render(node: Readonly<SNodeImpl & ComponentNode & Selectable>, context: RenderingContext): VNode {
        return <g>
            <rect class-sprotty-node={true} class-task={true}
                class-active={node.isActive}
                class-queued={node.isQueued}
                class-passive={node.isPassive}
                class-selected={node.selected}
                width={node.size.width}
                height={node.size.height}
            >
            </rect>
            <text
                x={node.size.width / 2}
                y={node.size.height + 10}
                text-anchor="middle"
                alignment-baseline="hanging"
                class-comp-label={true}
            >
                {node.name}
            </text>
        </g>;
    }
}