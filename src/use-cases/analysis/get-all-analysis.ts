import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';

export class GetHistUseCase {
  constructor(private analysisRepository: AnalysisRepository) {}

  async handler(page: number, pageSize: number) {
    const [data, count] = await this.analysisRepository.findAndCount(page, pageSize);
    const hasNext = (page - 1) * pageSize + data.length < count;
    return { data, page, pageSize, hasNext };
  }
}
