import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { UpdateAnalysisStatusUseCase } from '@/use-cases/analysis/update-analysis-status';

export function makeUpdateAnalysisStatusUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new UpdateAnalysisStatusUseCase(analysisRepository);
}
