import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { GetReservByPrwAndIdUseCase } from '@/use-cases/reserv/get-reserv-by-source';

export function makeGetReservByPrwAndIdUseCase() {
    const reservRepository = new ReservRepository();
    return new GetReservByPrwAndIdUseCase(reservRepository);
}
