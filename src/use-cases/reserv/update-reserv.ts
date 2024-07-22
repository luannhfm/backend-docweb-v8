// src/use-cases/reserv/update-reserv.ts
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { Reserv } from '@/entities/reserv.entity';

export class UpdateReservUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(id: string, updates: Partial<Reserv>): Promise<void> {
    const reserv = await this.reservRepository.findById(id);
    if (!reserv) {
      throw new Error('Reserva não encontrada.');
    }

    await this.reservRepository.update(id, updates);
  }
}
