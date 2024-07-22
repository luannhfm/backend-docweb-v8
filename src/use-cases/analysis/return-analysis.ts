import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';

export class ReturnAnalysisUseCase {
  constructor(private analysisRepository: AnalysisRepository) {}

  async handler(id: string) {
    const analysis = await this.analysisRepository.findById(id);
    if (!analysis) {
      throw new Error('Análise não encontrada');
    }
    return analysis.analysis;
  }
}
