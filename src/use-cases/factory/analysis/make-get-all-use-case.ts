import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { GetHistUseCase } from '@/use-cases/analysis/get-all-analysis';

export function makeGetHistUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new GetHistUseCase(analysisRepository);
}
