// src/use-cases/source/delete-source.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';

export class DeleteSourceUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async handler(name: string): Promise<void> {
    await this.sourceRepository.delete(name);
  }
}
