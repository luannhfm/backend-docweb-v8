import { SourceRepository } from '@/repositories/typeorm/source.repository';

export class DeleteAllSourcesUseCase {
  constructor(private sourceRepository: SourceRepository) {}

  async execute(): Promise<void> {
    await this.sourceRepository.deleteAll();
  }
}
