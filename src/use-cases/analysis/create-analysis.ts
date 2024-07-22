import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { Analysis } from '@/entities/analysis.entity';

export class CreateAnalysisUseCase {
  constructor(private analysisRepository: AnalysisRepository) {}

  async handler(analysisId: string, jsonAnalysis: any) {
    const newAnalysis: Partial<Analysis> = {
      id_analysis: analysisId,
      analysis: jsonAnalysis,
      status: 'processando',
    };
    await this.analysisRepository.createAnalysis(newAnalysis);
  }
}
