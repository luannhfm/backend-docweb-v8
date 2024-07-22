// src/repositories/typeorm/source.repository.ts
import { Repository } from 'typeorm';
import { Source } from '@/entities/source.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class SourceRepository {
  private repository: Repository<Source>;

  constructor() {
    this.repository = appDataSource.getRepository(Source);
  }
  async create(data: Partial<Source>): Promise<Source> {
    return this.repository.save(data);
  }

  async findAll(): Promise<Source[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Source | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByPrw(name: string): Promise<Source | null>  {
    return this.repository.findOne({ where: { name } });
  }

  async findByUuid(uuid: string): Promise<Source[]> {
    return this.repository.find({ where: { uuid } });
  }

  async update(name: string, updates: Partial<Source>): Promise<void> {
    await this.repository.update({ name }, updates);
}

async updateCatgeory(prw: string, updates: Partial<Source>): Promise<void> {
  await this.repository.update({ name: prw }, updates);
}
async updateReservStatus(name: string, reserv: boolean, dev: string | null): Promise<void> {
  await this.repository.update({ name }, { reserv });
}

  async delete(name: string): Promise<void> {
    await this.repository.delete({ name });
  }

  async deleteAll(): Promise<void> {
    await this.repository.query('TRUNCATE TABLE "source" CASCADE');
  }
  async findByConditions(conditions: any): Promise<Source[]> {
    console.log(conditions)
    return this.repository.find({ where: conditions });
  }
  
}
