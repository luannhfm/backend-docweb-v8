// src/repositories/typeorm/source-table.repository.ts
import { Repository } from 'typeorm';
import { SourceTable } from '@/entities/source-table.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class SourceTableRepository {
  private repository: Repository<SourceTable>;

  constructor() {
    this.repository = appDataSource.getRepository(SourceTable);
  }

  async create(data: Partial<SourceTable>): Promise<SourceTable> {
    return this.repository.save(data);
  }

  async findAll(): Promise<SourceTable[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<SourceTable | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findBySource(sourceId: number): Promise<SourceTable[]> {
    return this.repository.find({ where: { source: { id: sourceId } } });
  }

  async update(id: string, updates: Partial<SourceTable>): Promise<void> {
    await this.repository.update(id, updates);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
