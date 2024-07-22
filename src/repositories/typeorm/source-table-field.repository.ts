// src/repositories/typeorm/source-table-field.repository.ts
import { Repository } from 'typeorm';
import { SourceTableField } from '@/entities/source-table-field.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class SourceTableFieldRepository {
  private repository: Repository<SourceTableField>;

  constructor() {
    this.repository = appDataSource.getRepository(SourceTableField);
  }

  async create(data: Partial<SourceTableField>): Promise<SourceTableField> {
    return this.repository.save(data);
  }

  async findAll(): Promise<SourceTableField[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<SourceTableField | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findBySourceTable(sourceTableId: number): Promise<SourceTableField[]> {
    return this.repository.find({ where: { sourceTable: { id: sourceTableId } } });
  }

  async update(id: string, updates: Partial<SourceTableField>): Promise<void> {
    await this.repository.update(id, updates);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
