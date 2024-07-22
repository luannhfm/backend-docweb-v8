import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';
import { DeleteAnalysisProcessUseCase } from '@/use-cases/analysis-process/delete-analysis-process';

export function makeDeleteAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  const attentionPointRepository = new AttentionPointRepository();
  const differenceRepository = new DifferenceRepository();
  return new DeleteAnalysisProcessUseCase(
    analysisResultRepository,
    attentionPointRepository,
    differenceRepository
  );
}
