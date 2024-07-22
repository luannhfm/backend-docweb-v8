import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { GetAllReservUseCase } from '@/use-cases/reserv/get-all-reserv';

export function makeGetAllReservUseCase() {
  const reservRepository = new ReservRepository();
  return new GetAllReservUseCase(reservRepository);
}