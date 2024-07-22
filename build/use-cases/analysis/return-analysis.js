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

// src/use-cases/analysis/return-analysis.ts
var return_analysis_exports = {};
__export(return_analysis_exports, {
  ReturnAnalysisUseCase: () => ReturnAnalysisUseCase
});
module.exports = __toCommonJS(return_analysis_exports);
var ReturnAnalysisUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(id) {
    const analysis = await this.analysisRepository.findById(id);
    if (!analysis) {
      throw new Error("An\xE1lise n\xE3o encontrada");
    }
    return analysis.analysis;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReturnAnalysisUseCase
});
