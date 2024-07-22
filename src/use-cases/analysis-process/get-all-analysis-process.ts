import { AnalysisResult } from '@/entities/analysis-result.entity';
import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';

export class GetAllAnalysisProcessUseCase {
  constructor(private analysisResultRepository: AnalysisResultRepository) {}

  async handler(page: number, pageSize: number): Promise<{ data: AnalysisResult[]; page: number; pageSize: number; hasNext: boolean }> {
    const [data, count] = await this.analysisResultRepository.findAndCount(page, pageSize);
    const hasNext = (page - 1) * pageSize + data.length < count;
    return { data, page, pageSize, hasNext };
  }
}
