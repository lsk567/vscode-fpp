interface IPosition {
    line: number;
    character: number;
}

interface IRange {
    start: IPosition;
    end: IPosition;
}

interface RangeAssociation<T> {
    range: IRange;
    value: T;
}

export type IRangeAssociation = [number, [number, number, string][]][];

export class RangeAssociator<T> {
    private lines = new Map<number, RangeAssociation<T>[]>();
    private serializeT: (value: T) => string;

    constructor(
        serialized?: IRangeAssociation,
        serialize: (value: T) => string = JSON.stringify,
        deserialize: (json: string) => T = JSON.parse,
    ) {
        this.serializeT = serialize;

        if (serialized) {
            for (const [line, tokens] of serialized) {
                const lineAssociations: RangeAssociation<T>[] = [];
                for (const [start, end, value] of tokens) {
                    lineAssociations.push({
                        range: {
                            start: { line, character: start },
                            end: { line, character: end }
                        },
                        value: deserialize(value)
                    });
                }

                this.lines.set(line, lineAssociations);
            }
        }
    }

    serialize(): IRangeAssociation {
        // line: [startCol, endCol, value][]
        const out: [number, [number, number, string][]][] = [];
        for (const [line, tokens] of this.lines) {
            const lineSer: [number, number, string][] = [];
            for (const tok of tokens) {
                lineSer.push([tok.range.start.character, tok.range.end.character, this.serializeT(tok.value)]);
            }

            out.push([line, lineSer]);
        }

        return out;
    }

    add(range: IRange, value: T) {
        const line = range.start.line;

        const association: RangeAssociation<T> = { range, value };

        for (let i = range.start.line; i <= range.end.line; i++) {
            if (!this.lines.has(line)) {
                this.lines.set(line, [association]);
            } else {
                this.lines.get(line)!.push(association);
            }
        }
    }

    getAssociation(position: IPosition): RangeAssociation<T> | undefined {
        const tokens = this.lines.get(position.line);
        if (!tokens) {
            return undefined;
        }

        for (const tok of tokens) {
            // Check if the position is contained in the range
            if (tok.range.start.line <= position.line &&
                position.line <= tok.range.end.line &&
                tok.range.start.character <= position.character &&
                position.character <= tok.range.end.character
            ) {
                return tok;
            }
        }
    }

    get(position: IPosition): T | undefined {
        return this.getAssociation(position)?.value;
    }
}
