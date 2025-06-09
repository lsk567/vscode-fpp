/**
 * Since the information needed to render nodes is fully contained in the AST nodes,
 * the SGraph interfaces embed the AST interfaces to retrieve the info.
 */
import { SLabel, SNode, SPort } from "sprotty-protocol";

export interface ComponentNode extends SNode {
    name: string
}

export interface PortNode extends SPort {
    name: string
}