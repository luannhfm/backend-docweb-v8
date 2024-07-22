// src/use-cases/source/get-all-sources.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { Source } from '@/entities/source.entity';

export class GetAllSourcesUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async handler(): Promise<Source[]> {
    return this.sourceRepository.findAll();
  }
}
