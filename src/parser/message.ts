import { IRangeAssociation } from '../associator';
import * as Fpp from './ast';

export type IRange = [number, number, number, number];
export interface IDiagnostic {
    range: IRange;
    message: string;
}

export interface IFppMessage {
    ast: Fpp.TranslationUnit;
    ranges: IRangeAssociation;
    syntaxErrors: IDiagnostic[];
    version: number;
}
