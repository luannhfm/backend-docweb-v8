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

// src/use-cases/source/get-source-detail.ts
var get_source_detail_exports = {};
__export(get_source_detail_exports, {
  GetSourceDetailUseCase: () => GetSourceDetailUseCase
});
module.exports = __toCommonJS(get_source_detail_exports);
var GetSourceDetailUseCase = class {
  constructor(sourceRepository, sourceFunctionRepository, sourceTableRepository, sourceTableFieldRepository) {
    this.sourceRepository = sourceRepository;
    this.sourceFunctionRepository = sourceFunctionRepository;
    this.sourceTableRepository = sourceTableRepository;
    this.sourceTableFieldRepository = sourceTableFieldRepository;
  }
  async handler(id) {
    const source = await this.sourceRepository.findById(id);
    if (!source) {
      return null;
    }
    const functions = await this.sourceFunctionRepository.findBySource(id);
    const tables = await this.sourceTableRepository.findBySource(id);
    for (const table of tables) {
      const fields = await this.sourceTableFieldRepository.findBySourceTable(table.id);
      table.fields = fields;
    }
    source.Functions = functions;
    source.Tables = tables;
    return source;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetSourceDetailUseCase
});
