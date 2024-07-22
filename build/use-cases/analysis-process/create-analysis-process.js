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

// src/use-cases/analysis-process/create-analysis-process.ts
var create_analysis_process_exports = {};
__export(create_analysis_process_exports, {
  CreateAnalysisProcessUseCase: () => CreateAnalysisProcessUseCase
});
module.exports = __toCommonJS(create_analysis_process_exports);
var import_typeorm = require("typeorm");
var CreateAnalysisProcessUseCase = class {
  constructor(analysisResultRepository, attentionPointRepository, differenceRepository, sourceRepository, dictionaryRepository) {
    this.analysisResultRepository = analysisResultRepository;
    this.attentionPointRepository = attentionPointRepository;
    this.differenceRepository = differenceRepository;
    this.sourceRepository = sourceRepository;
    this.dictionaryRepository = dictionaryRepository;
  }
  async handler(data) {
    const { id, fontes, categorys, analysisId } = data;
    const analysisResult = await this.analysisResultRepository.create({
      id_analysis: analysisId,
      fontes: fontes.length,
      fontes_points: 0,
      total_points: 0,
      status: "processando",
      dic: id
    });
    let whereCondition = {};
    if (fontes.length > 0) {
      whereCondition = { name: (0, import_typeorm.In)(fontes) };
    } else {
      whereCondition = { category: (0, import_typeorm.In)(categorys) };
    }
    const sourceRecords = await this.sourceRepository.findByConditions(whereCondition);
    const analysisRecord = await this.dictionaryRepository.findById(id);
    if (!analysisRecord) {
      throw new Error("Analysis not found");
    }
    const analysisData = analysisRecord.analysis;
    const keyDetailsMap = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    for (const key in analysisData) {
      if (analysisData.hasOwnProperty(key)) {
        const entries = analysisData[key];
        for (const entry of entries) {
          const keyDetail = entry.chave.split(":")[1];
          keys.add(keyDetail);
          if (!keyDetailsMap.has(keyDetail)) {
            keyDetailsMap.set(keyDetail, []);
          }
          keyDetailsMap.get(keyDetail).push({
            instalacao: entry.instalacao,
            tabela: entry.tabela,
            dif: entry.dif,
            chave: entry.chave
          });
        }
      }
    }
    const uniqueSources = /* @__PURE__ */ new Set();
    let totalAttentionPoints = 0;
    console.log(sourceRecords);
    for (const source of sourceRecords) {
      const sourceName = source.name;
      const category = source.category || "N/A";
      const sourceContent = source.source;
      if (!sourceContent) {
        console.error("Source content is empty for source:", sourceName);
        continue;
      }
      const lines = sourceContent.split("\n");
      if (lines.length === 0) {
        console.error("No lines found for source:", sourceName);
        continue;
      }
      let pointNumber = 0;
      for (const key of keys) {
        let localFontCount = 0;
        const linesWithKeys = /* @__PURE__ */ new Set();
        const keyRegex = new RegExp(`\\b${key}\\b`);
        for (let i = 0; i < lines.length; i++) {
          if (keyDetailsMap.has(key)) {
            const details = keyDetailsMap.get(key);
            for (const detail of details) {
              if (detail.tabela.startsWith("SIX")) {
                if (lines[i].includes("dbsetorder") || lines[i].includes("posicione")) {
                  if (new RegExp(`\\b${key.slice(0, 3)}\\b`).test(lines[i])) {
                    linesWithKeys.add(i + 1);
                    localFontCount++;
                  }
                }
              } else {
                if (keyRegex.test(lines[i])) {
                  linesWithKeys.add(i + 1);
                  localFontCount++;
                }
              }
            }
          }
        }
        if (localFontCount > 0) {
          uniqueSources.add(sourceName);
          const attentionPoint = await this.attentionPointRepository.create({
            id_analysis: analysisResult.id_analysis,
            source_name: sourceName,
            category,
            total_points: localFontCount,
            point_number: ++pointNumber,
            line_numbers: [...linesWithKeys].join(",")
          });
          totalAttentionPoints++;
          if (keyDetailsMap.has(key)) {
            for (const detail of keyDetailsMap.get(key)) {
              const difference = await this.differenceRepository.create({
                attention_point_id: attentionPoint.id,
                source_name: sourceName,
                environment: detail.instalacao,
                table_name: detail.tabela,
                key: detail.chave,
                value: detail.dif
              });
            }
          }
        }
      }
    }
    await this.analysisResultRepository.update(analysisResult.id_analysis, {
      fontes_points: uniqueSources.size,
      total_points: totalAttentionPoints,
      status: "concluido"
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateAnalysisProcessUseCase
});
