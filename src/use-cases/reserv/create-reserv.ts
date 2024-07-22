// src/use-cases/reserv/create-reserv.ts
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { Reserv } from '@/entities/reserv.entity';

export class CreateReservUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(reserv: Reserv): Promise<void> {
    await this.reservRepository.create(reserv);
  }
}
