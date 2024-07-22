import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { ReturnAnalysisUseCase } from '@/use-cases/analysis/return-analysis';

export function makeReturnAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new ReturnAnalysisUseCase(analysisRepository);
}
