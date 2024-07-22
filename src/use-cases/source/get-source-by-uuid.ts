// src/use-cases/source/get-source-by-uuid.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { Source } from '@/entities/source.entity';

export class GetSourceByUuidUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async handler(uuid: string): Promise<Source[]> {
    return this.sourceRepository.findByUuid(uuid);
  }
}
