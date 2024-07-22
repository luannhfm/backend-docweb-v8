import {
  appDataSource
} from "./chunk-OZ52BTMV.js";
import {
  Analysis
} from "./chunk-A4CQ4RPY.js";

// src/repositories/typeorm/analysis.repository.ts
var AnalysisRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Analysis);
  }
  async updateAnalysisStatus(analysisId, jsonAnalysis) {
    await this.repository.update(analysisId, {
      status: "conclu\xEDdo",
      analysis: jsonAnalysis
    });
  }
};

export {
  AnalysisRepository
};
