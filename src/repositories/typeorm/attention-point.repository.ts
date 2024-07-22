import { Repository } from 'typeorm';
import { AttentionPoint } from '@/entities/attention-point.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class AttentionPointRepository {
  private repository: Repository<AttentionPoint>;

  constructor() {
    this.repository = appDataSource.getRepository(AttentionPoint);
  }

  async create(data: Partial<AttentionPoint>): Promise<AttentionPoint> {
    return this.repository.save(data);
  }

  async findAll(): Promise<AttentionPoint[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<AttentionPoint | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByAnalysisId(id_analysis: string): Promise<AttentionPoint[]> {
    return this.repository.find({ where: { id_analysis } });
  }

  async update(id: number, updates: Partial<AttentionPoint>): Promise<void> {
    await this.repository.update({ id }, updates);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  async deleteByAnalysisId(id_analysis: string): Promise<void> {
    await this.repository.delete({ id_analysis });
  }
}
