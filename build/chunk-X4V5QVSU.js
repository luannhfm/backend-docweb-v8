// src/utils/stream.utils.ts
import { PassThrough } from "stream";
async function bufferToStream(buffer) {
  const stream = new PassThrough();
  stream.end(buffer);
  return stream;
}
async function getKeyColumnIndices(prefix) {
  switch (prefix) {
    case "SIX":
    case "SX6":
    case "SX7":
    case "SX9":
    case "SXA":
      return [0, 1];
    case "SX1":
    case "SX2":
    case "SXG":
      return [0];
    case "SX3":
      return [2];
    case "SX5":
      return [0, 1, 2];
    default:
      return [0];
  }
}
async function createCompositeKey(header, columns, keyColumnIndices) {
  const keyParts = keyColumnIndices.map((index) => {
    const columnName = header[index] || `Coluna ${index + 1}`;
    const columnValue = columns[index].trim();
    if (columnValue) {
      return `${columnName}:${columnValue}`;
    }
    return null;
  }).filter((part) => part !== null);
  return keyParts.join(" | ");
}

export {
  bufferToStream,
  getKeyColumnIndices,
  createCompositeKey
};
