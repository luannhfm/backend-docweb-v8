// src/repositories/typeorm/source-function.repository.ts
import { Repository } from 'typeorm';
import { SourceFunction } from '@/entities/source-function.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class SourceFunctionRepository {
  private repository: Repository<SourceFunction>;

  constructor() {
    this.repository = appDataSource.getRepository(SourceFunction);
  }

  async create(data: Partial<SourceFunction>): Promise<SourceFunction> {
    return this.repository.save(data);
  }

  async findAll(): Promise<SourceFunction[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<SourceFunction | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findBySource(sourceId: number): Promise<SourceFunction[]> {
    return this.repository.find({ where: { Source: { id: sourceId } } });
  }

  async update(id: string, updates: Partial<SourceFunction>): Promise<void> {
    await this.repository.update(id, updates);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
