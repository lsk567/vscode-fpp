import { SNode } from "sprotty-protocol";

export interface ComponentNode extends SNode {
    name: string;
    isActive: boolean;
    isQueued: boolean;
    isPassive: boolean;
}