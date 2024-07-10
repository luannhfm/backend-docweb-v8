export interface ISourceFunction {
    uuid?: string;
    type?: string;
    name?: string; 
    source?: string;
    line?: number;
    blankLines?: number;
    commentedLines?: number;
}