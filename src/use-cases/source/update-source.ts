// src/use-cases/source/update-source.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { Source } from '@/entities/source.entity';

export class UpdateSourceUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async handler(prw: string, updates: Partial<Source>): Promise<void> {
    await this.sourceRepository.update(prw, updates);
  }
}