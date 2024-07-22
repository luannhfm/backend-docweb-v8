import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { CreateAnalysisUseCase } from '@/use-cases/analysis/create-analysis';

export function makeCreateAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new CreateAnalysisUseCase(analysisRepository);
}
