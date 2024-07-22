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

// src/use-cases/analysis-process/delete-analysis-process.ts
var delete_analysis_process_exports = {};
__export(delete_analysis_process_exports, {
  DeleteAnalysisProcessUseCase: () => DeleteAnalysisProcessUseCase
});
module.exports = __toCommonJS(delete_analysis_process_exports);
var DeleteAnalysisProcessUseCase = class {
  constructor(analysisResultRepository, attentionPointRepository, differenceRepository) {
    this.analysisResultRepository = analysisResultRepository;
    this.attentionPointRepository = attentionPointRepository;
    this.differenceRepository = differenceRepository;
  }
  async handler(id) {
    await this.differenceRepository.deleteByAttentionPointId(Number(id));
    await this.attentionPointRepository.deleteByAnalysisId(id);
    await this.analysisResultRepository.delete(id);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteAnalysisProcessUseCase
});
