// src/use-cases/source/create-source.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { Source } from '@/entities/source.entity';

export class CreateSourceUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async handler(source: Source, user: string, commit: string): Promise<void> {
    await this.sourceRepository.create(source);
  }
}
