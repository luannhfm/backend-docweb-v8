"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/stream.utils.ts
var stream_utils_exports = {};
__export(stream_utils_exports, {
  bufferToStream: () => bufferToStream,
  createCompositeKey: () => createCompositeKey,
  getKeyColumnIndices: () => getKeyColumnIndices
});
module.exports = __toCommonJS(stream_utils_exports);
var import_stream = require("stream");
async function bufferToStream(buffer) {
  const stream = new import_stream.PassThrough();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bufferToStream,
  createCompositeKey,
  getKeyColumnIndices
});
