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

// src/use-cases/analysis-process/get-analysis-details.ts
var get_analysis_details_exports = {};
__export(get_analysis_details_exports, {
  GetAnalysisDetailsUseCase: () => GetAnalysisDetailsUseCase
});
module.exports = __toCommonJS(get_analysis_details_exports);
var GetAnalysisDetailsUseCase = class {
  constructor(analysisResultRepository, attentionPointRepository, differenceRepository) {
    this.analysisResultRepository = analysisResultRepository;
    this.attentionPointRepository = attentionPointRepository;
    this.differenceRepository = differenceRepository;
  }
  async handler(analysisId) {
    const analysisResult = await this.analysisResultRepository.findById(analysisId);
    if (!analysisResult) {
      throw new Error("Analysis not found");
    }
    const attentionPoints = await this.attentionPointRepository.findByAnalysisId(analysisId);
    const response = {
      id: analysisResult.id_analysis,
      dic: analysisResult.dic,
      totalFont: analysisResult.fontes,
      totalPoint: analysisResult.total_points,
      fontesPoint: analysisResult.fontes_points,
      dataImpressao: (/* @__PURE__ */ new Date()).toISOString(),
      pontosAtencao: []
    };
    for (const point of attentionPoints) {
      const differences = await this.differenceRepository.findByAttentionPointId(point.id);
      response.pontosAtencao.push({
        fonte: point.source_name,
        pontoAtencao: point.point_number,
        categoria: point.category,
        totalPontos: point.total_points,
        linhasFonte: point.line_numbers,
        diferencas: differences.map((difference) => ({
          ambiente: difference.environment,
          tabela: difference.table_name,
          chave: difference.key,
          valor: difference.value
        }))
      });
    }
    return response;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetAnalysisDetailsUseCase
});
