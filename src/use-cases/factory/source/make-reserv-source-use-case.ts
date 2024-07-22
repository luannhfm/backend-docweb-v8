import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { ReservSourceUseCase } from '@/use-cases/source/reserv-source';

export function makeReservSourceUseCase() {
    const sourceRepository = new SourceRepository();
    const reservRepository = new ReservRepository();
    return new ReservSourceUseCase(sourceRepository, reservRepository);
}
