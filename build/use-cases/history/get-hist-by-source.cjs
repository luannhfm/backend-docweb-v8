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

// src/use-cases/history/get-hist-by-source.ts
var get_hist_by_source_exports = {};
__export(get_hist_by_source_exports, {
  GetHistByFonteUseCase: () => GetHistByFonteUseCase
});
module.exports = __toCommonJS(get_hist_by_source_exports);
var GetHistByFonteUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(fonte) {
    return this.histRepository.findByFonte(fonte);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetHistByFonteUseCase
});
