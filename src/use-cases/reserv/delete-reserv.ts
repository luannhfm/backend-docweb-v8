import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { SourceRepository } from '@/repositories/typeorm/source.repository';

export class DeleteReservUseCase {
  constructor(
    private reservRepository: ReservRepository,
    private sourceRepository: SourceRepository
  ) {}

  async handler(id: number) {
    const reserv = await this.reservRepository.findById(id);

    if (!reserv) {
      throw new Error('Registro não encontrado.');
    }

    const source = await this.sourceRepository.findByName(reserv.fonte);

    if (!source) {
      throw new Error('Fonte não encontrada na tabela Source.');
    }

    await this.sourceRepository.updateReservStatus(reserv.fonte, false);
    await this.reservRepository.deleteById(id);
  }
}
