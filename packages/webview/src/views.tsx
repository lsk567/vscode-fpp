/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl, SPortImpl } from 'sprotty';
import { Selectable } from 'sprotty-protocol';
import { ComponentNode, PortNode } from './models';

@injectable()
export class ComponentNodeView implements IView {
    render(node: Readonly<SNodeImpl & ComponentNode & Selectable>, context: RenderingContext): VNode {
        return <g>
            <rect class-sprotty-node={true} class-task={true}
                // class-active={node.astNode.kind.value === 'active'}
                // class-queued={node.astNode.kind.value === 'queued'}
                // class-passive={node.astNode.kind.value === 'passive'}
                class-selected={node.selected}
                width={node.size.width}
                height={node.size.height}
            >
            </rect>
            {context.renderChildren(node)}
        </g>;
    }
}

@injectable()
export class PortView implements IView {
    render(node: Readonly<SNodeImpl & PortNode>, context: RenderingContext): VNode {
        const triangle = `0,0 ${node.size.width},${node.size.height / 2} 0,${node.size.height}`;
        return <g>
            <polygon
                points={triangle}
                class-sprotty-port={true}
            />
            {context.renderChildren(node)}
        </g>;
    }
}
