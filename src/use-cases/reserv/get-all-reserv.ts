// src/use-cases/reserv/get-all-reserv.ts
import { Reserv } from '@/entities/reserv.entity';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { differenceInDays, parse } from 'date-fns';

export class GetAllReservUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(page: number, pageSize: number): Promise<{ data: Reserv[], total: number, hasNext: boolean }> {
    const offset = (page - 1) * pageSize;
    const reservs = await this.reservRepository.findDistinctByFonte(pageSize, offset);
    const total = await this.reservRepository.countDistinctFonte();
    const hasNext = offset + reservs.length < total;

    return {
      data: reservs.map(reserv => ({
        ...reserv,
        dias: this.calculateDays(reserv)
      })),
      total,
      hasNext
    };
  }

  private calculateDays(reserv: Reserv): number {
    const dataIni = parse(reserv.data_ini, 'dd/MM/yyyy', new Date());
    const dataFim = reserv.data_fim ? parse(reserv.data_fim, 'dd/MM/yyyy', new Date()) : new Date();
    return differenceInDays(dataFim, dataIni);
  }
}
