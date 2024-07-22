import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { GetAllAnalysisProcessUseCase } from '@/use-cases/analysis-process/get-all-analysis-process';

export function makeGetAllAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  return new GetAllAnalysisProcessUseCase(analysisResultRepository);
}
