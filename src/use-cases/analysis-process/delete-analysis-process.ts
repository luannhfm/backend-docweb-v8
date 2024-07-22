import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';

export class DeleteAnalysisProcessUseCase {
  constructor(
    private analysisResultRepository: AnalysisResultRepository,
    private attentionPointRepository: AttentionPointRepository,
    private differenceRepository: DifferenceRepository
  ) {}

  async handler(id: string): Promise<void> {
    // id é uma string para analysis process, então mantemos como string
    await this.differenceRepository.deleteByAttentionPointId(Number(id)); // Certifique-se de que o ID passado aqui seja do tipo correto
    await this.attentionPointRepository.deleteByAnalysisId(id); // Este já é string
    await this.analysisResultRepository.delete(id); // Este já é string
  }
}
