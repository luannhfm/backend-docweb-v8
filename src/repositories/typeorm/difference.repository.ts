import { Repository } from 'typeorm';
import { Difference } from '@/entities/difference.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class DifferenceRepository {
  private repository: Repository<Difference>;

  constructor() {
    this.repository = appDataSource.getRepository(Difference);
  }

  async create(data: Partial<Difference>): Promise<Difference> {
    return this.repository.save(data);
  }

  async findAll(): Promise<Difference[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Difference | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByAttentionPointId(attention_point_id: number): Promise<Difference[]> {
    return this.repository.find({ where: { attention_point_id } });
  }

  async update(id: number, updates: Partial<Difference>): Promise<void> {
    await this.repository.update({ id }, updates);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  async deleteByAttentionPointId(attention_point_id: number): Promise<void> {
    await this.repository.delete({ attention_point_id });
  }
}
