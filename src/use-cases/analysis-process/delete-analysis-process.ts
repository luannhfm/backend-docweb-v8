import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';

export class DeleteAnalysisProcessUseCase {
  constructor(
    private analysisResultRepository: AnalysisResultRepository
  ) {}

  async handler(id: string): Promise<void> {
    await this.analysisResultRepository.delete(id);
  }
}
