import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { DeleteAnalysisUseCase } from '@/use-cases/analysis/delete-analysis';

export function makeDeleteAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new DeleteAnalysisUseCase(analysisRepository);
}
