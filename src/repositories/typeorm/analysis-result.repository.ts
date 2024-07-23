import { Repository } from 'typeorm';
import { AnalysisResult } from '@/entities/analysis-result.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class AnalysisResultRepository {
  private repository: Repository<AnalysisResult>;

  constructor() {
    this.repository = appDataSource.getRepository(AnalysisResult);
  }

  async create(data: Partial<AnalysisResult>): Promise<AnalysisResult> {
    return this.repository.save(data);
  }

  async findAll(): Promise<AnalysisResult[]> {
    return this.repository.find({
      order: {
        created_at: 'DESC',
      },
  });
  }

  async findById(id: string): Promise<AnalysisResult | null> {
    return this.repository.findOne({ where: { id_analysis: id } });
  }

  async update(id_analysis: string, updates: Partial<AnalysisResult>): Promise<void> {
    await this.repository.update({ id_analysis }, updates);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id_analysis: id });
  }
  async findAndCount(page: number, pageSize: number): Promise<[AnalysisResult[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: {
        created_at: 'DESC',
      },
    });
  }
}
