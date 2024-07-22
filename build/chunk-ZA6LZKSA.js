import {
  AnalysisRepository
} from "./chunk-22LMS47H.js";
import {
  UpdateAnalysisStatusUseCase
} from "./chunk-EJB5RFWV.js";

// src/use-cases/factory/analysis/make-update-analysis-status-use-case.ts
function makeUpdateAnalysisStatusUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new UpdateAnalysisStatusUseCase(analysisRepository);
}

export {
  makeUpdateAnalysisStatusUseCase
};
