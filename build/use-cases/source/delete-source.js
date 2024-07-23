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

// src/use-cases/source/delete-source.ts
var delete_source_exports = {};
__export(delete_source_exports, {
  DeleteSourceUseCase: () => DeleteSourceUseCase
});
module.exports = __toCommonJS(delete_source_exports);
var DeleteSourceUseCase = class {
  constructor(sourceRepository, histRepository) {
    this.sourceRepository = sourceRepository;
    this.histRepository = histRepository;
  }
  async handler(name, user) {
    const source = await this.sourceRepository.findByPrw(name);
    if (!source) {
      throw new Error("Source not found");
    }
    await this.sourceRepository.delete(name);
    await this.histRepository.create({
      fonte: source.name,
      user,
      action: "DELETE",
      source: source.source,
      commit: `Registro deletado pelo usuario ${user}`
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteSourceUseCase
});
