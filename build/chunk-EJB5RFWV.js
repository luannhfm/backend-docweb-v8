// src/use-cases/analysis/update-analysis-status.ts
var UpdateAnalysisStatusUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(analysisId, jsonAnalysis) {
    await this.analysisRepository.updateAnalysisStatus(analysisId, jsonAnalysis);
  }
};

export {
  UpdateAnalysisStatusUseCase
};
