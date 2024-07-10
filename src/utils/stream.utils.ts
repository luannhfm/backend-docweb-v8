import { PassThrough } from 'stream';

export async function bufferToStream(buffer: Buffer) {
    const stream = new PassThrough();
    stream.end(buffer);
    return stream;
  }
  
export async function getKeyColumnIndices(prefix: string) {
    // Usando o prefixo para determinar quais colunas compõem a chave
    switch(prefix) {
        case 'SIX':
        case 'SX6':
        case 'SX7':
        case 'SX9':
        case 'SXA':
            return [0, 1]; // Coluna 1 e Coluna 2
        case 'SX1':
        case 'SX2':
        case 'SXG':
            return [0]; // Somente Coluna 1
        case 'SX3':
            return [2]; // Somente Coluna 3
        case 'SX5':
            return [0, 1, 2]; // Coluna 1, Coluna 2 e Coluna 3
        default:
            return [0]; // Padrão é Coluna 1 se não for especificado
    }
  }
  
  export async function createCompositeKey(header: { [x: string]: string; }, columns: { [x: string]: string; }, keyColumnIndices: any[]) {
    // Gera uma chave composta combinando nome da coluna e valor
    const keyParts = keyColumnIndices.map(index => {
        const columnName = header[index] || `Coluna ${index + 1}`; // Usa o nome da coluna do cabeçalho ou um padrão
        const columnValue = columns[index].trim();
        if (columnValue) { // Verifica se o valor não está vazio
            return `${columnName}:${columnValue}`; // Formato NomeColuna:Valor
        }
        return null; // Retorna null se o valor estiver vazio
    }).filter(part => part !== null); // Filtra partes nulas (onde o valor da coluna estava vazio)
  
    return keyParts.join(' | '); // Separa múltiplas colunas válidas com '|'
  }