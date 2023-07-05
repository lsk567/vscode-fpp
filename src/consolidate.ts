export interface ConsolidatingItem {
    name: string;
    children: ConsolidatingItem[];
}

function itemCompare(a: ConsolidatingItem, b: ConsolidatingItem) {
    return a.name.localeCompare(b.name);
}

export class ConsolidatingTree<T extends ConsolidatingItem> {
    private readonly symbols = new Map<string, T>();

    set(name: string, value: T) {
        this.symbols.set(name, value);
    }

    has(name: string): boolean {
        return this.symbols.has(name);
    }

    consolidate() {
        const symbolNames = Array.from(this.symbols.keys());
        for (const name of symbolNames) {
            const toks = name.split('.');
            const originalToks = [...toks];

            while (toks.pop()) {
                const tryParent = this.symbols.get(toks.join('.'));

                if (tryParent) {
                    let parent: ConsolidatingItem = tryParent;

                    // Walk this tree and find deepest the target
                    for (let tokIdx = toks.length; tokIdx < originalToks.length; tokIdx++) {
                        let foundChild = false;

                        for (const child of parent.children) {
                            if (child.name === originalToks[tokIdx]) {
                                parent = child;
                                foundChild = true;
                                break;
                            }
                        }

                        if (!foundChild) {
                            break;
                        }
                    }

                    parent.children.push(this.symbols.get(name)!);
                    parent.children = parent.children.sort(itemCompare);

                    this.symbols.delete(name);
                    break;
                }
            }
        }
    }

    all(): T[] {
        return Array.from(this.symbols.values()).sort(itemCompare);
    }
}
