// src/use-cases/source/delete-source.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { HistRepository } from '@/repositories/typeorm/history.repository';

export class DeleteSourceUseCase {
  constructor(
    private sourceRepository: SourceRepository,
    private histRepository: HistRepository
  ) {}

  async handler(name: string, user: string): Promise<void> {
    const source = await this.sourceRepository.findByPrw(name);
    if (!source) {
      throw new Error('Source not found');
    }

    await this.sourceRepository.delete(name);
    
    await this.histRepository.create({
      fonte: source.name,
      user: user, 
      action: 'DELETE',
      source: source.source,
      commit: `Registro deletado pelo usuario ${user}`,
    });
  }
}
