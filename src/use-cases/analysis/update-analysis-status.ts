import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';

export class UpdateAnalysisStatusUseCase {
  constructor(private analysisRepository: AnalysisRepository) {}

  async handler(analysisId: string, jsonAnalysis: any) {
    await this.analysisRepository.updateAnalysisStatus(analysisId, jsonAnalysis);
  }
}
