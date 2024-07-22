import { Reserv } from '@/entities/reserv.entity';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { differenceInMinutes, parse } from 'date-fns';

export class GetReservByPrwAndIdUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(prw:string ,id: number): Promise<any> {
    const reservs = await this.reservRepository.findByPrwAndId(prw,id);
    return reservs.map(reserv => ({
      ...reserv,
      dias: this.calculateDuration(reserv)
    }));
  }

  private calculateDuration(reserv: Reserv): string {
    const dataIni = parse(`${reserv.data_ini} ${reserv.hora}`, 'dd/MM/yyyy HH:mm', new Date());
    const dataFim = reserv.data_fim ? parse(`${reserv.data_fim} ${reserv.hora_fim || '00:00'}`, 'dd/MM/yyyy HH:mm', new Date()) : new Date();
    const totalMinutes = differenceInMinutes(dataFim, dataIni);
    const dias = Math.floor(totalMinutes / (24 * 60));
    const horas = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutos = totalMinutes % 60;
    return `${dias} dias, ${horas} horas, ${minutos} minutos`;
  }
}