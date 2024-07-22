// src/use-cases/factory/reserv/make-update-reserv-use-case.ts
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { UpdateReservUseCase } from '@/use-cases/reserv/update-reserv';

export function makeUpdateReservUseCase() {
  const reservRepository = new ReservRepository();
  return new UpdateReservUseCase(reservRepository);
}
