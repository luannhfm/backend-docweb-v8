import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { DeleteAnalysisProcessUseCase } from '@/use-cases/analysis-process/delete-analysis-process';

export function makeDeleteAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  return new DeleteAnalysisProcessUseCase(analysisResultRepository);
}
