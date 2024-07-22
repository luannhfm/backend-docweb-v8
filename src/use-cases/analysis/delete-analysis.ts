import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';

export class DeleteAnalysisUseCase {
  constructor(private analysisRepository: AnalysisRepository) {}

  async handler(id: string) {
    const analysis = await this.analysisRepository.findById(id);
    if (!analysis) {
      throw new Error('Análise não encontrada');
    }
    await this.analysisRepository.deleteAnalysis(id);
  }
}
