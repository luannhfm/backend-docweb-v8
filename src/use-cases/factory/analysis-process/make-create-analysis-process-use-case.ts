import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { CreateAnalysisProcessUseCase } from '@/use-cases/analysis-process/create-analysis-process';

export function makeCreateAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  const attentionPointRepository = new AttentionPointRepository();
  const differenceRepository = new DifferenceRepository();
  const sourceRepository = new SourceRepository(); // Adiciona o SourceRepository
  const dictionaryRepository = new AnalysisRepository(); // Adiciona o DictionaryRepository

  return new CreateAnalysisProcessUseCase(
    analysisResultRepository,
    attentionPointRepository,
    differenceRepository,
    sourceRepository, // Passa o SourceRepository
    dictionaryRepository // Passa o DictionaryRepository
  );
}
