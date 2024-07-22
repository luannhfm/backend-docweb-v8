import { Repository } from 'typeorm';
import { Analysis } from '@/entities/analysis.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class AnalysisRepository {
  private repository: Repository<Analysis>;

  constructor() {
    this.repository = appDataSource.getRepository(Analysis);
  }

  async updateAnalysisStatus(id_analysis: string, analysis: any) {
    try {
      await this.repository.update({ id_analysis }, { status: 'concluído', analysis });
    } catch (error) {
      console.error('Erro ao atualizar a análise:', error);
      throw error;
    }
  
  }
  async findAndCount(page: number, pageSize: number): Promise<[Analysis[], number]> {
    const [results, total] = await this.repository.findAndCount({
      order: { id_analysis: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return [results, total];
  }

  async findById(id: string): Promise<Analysis | null> {
    return this.repository.findOne({ where: { id_analysis: id } });
  }

  async createAnalysis(analysis: Partial<Analysis>): Promise<Analysis> {
    return this.repository.save(analysis);
  }

  async deleteAnalysis(id: string): Promise<void> {
    await this.repository.delete({ id_analysis: id });
  }
}
