import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';
import { GetAnalysisDetailsUseCase } from '@/use-cases/analysis-process/get-analysis-details';

export function makeGetAnalysisDetailsUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  const attentionPointRepository = new AttentionPointRepository();
  const differenceRepository = new DifferenceRepository();
  return new GetAnalysisDetailsUseCase(
    analysisResultRepository,
    attentionPointRepository,
    differenceRepository
  );
}
