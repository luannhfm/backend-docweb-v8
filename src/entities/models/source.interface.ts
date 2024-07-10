export interface ISource {
    uuid?: string;
    label?: string;
    category?: string; 
    name?: string;
    tables?: number;
    functions?: number;
    source?: string;
    line?: number;
    blankLines?: number;
    commentedLines?: number;
    reserv?: boolean;
}