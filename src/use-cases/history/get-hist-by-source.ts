import { HistRepository } from '@/repositories/typeorm/history.repository';

export class GetHistByFonteUseCase {
  constructor(private histRepository: HistRepository) {}

  async handler(fonte: string) {
    return this.histRepository.findByFonte(fonte);
  }
}
