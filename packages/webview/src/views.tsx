/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl, SPortImpl } from 'sprotty';
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

@injectable()
export class SPortView implements IView {
    render(node: Readonly<SPortImpl>, context: RenderingContext): VNode {
        // Triangle points to the right, centered at (0,0), size 10x10
        // Adjust x/y as needed for your layout
        return <g>
            <polygon
                points="0,0 10,5 0,10"
                class-sprotty-port={true}
            />
        </g>;
    }
}
