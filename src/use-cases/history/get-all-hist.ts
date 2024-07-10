import { HistRepository } from '@/repositories/typeorm/history.repository';

export class GetFontesUseCase {
  constructor(private histRepository: HistRepository) {}

  async handler(search?: string) {
    return this.histRepository.findFontes(search);
  }
}
