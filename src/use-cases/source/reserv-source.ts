import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';

export class ReservSourceUseCase {
    constructor(
        private sourceRepository: SourceRepository,
        private reservRepository: ReservRepository
    ) {}

    async handler({ prw, user }: { prw: string; user: string }): Promise<void> {
        const sourceRecord = await this.sourceRepository.findByPrw(prw);

        if (!sourceRecord) {
            throw new Error('Nenhum registro encontrado no Source.');
        }

        const sourceOri = sourceRecord.source;

        await this.sourceRepository.update(prw, { reserv: true });

        const currentDate = new Date();
        const dataIni = currentDate.toLocaleDateString('pt-BR');
        const hora = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        await this.reservRepository.create({
            fonte: prw,
            dev: user,
            data_ini: dataIni,
            hora: hora,
            source_ori: sourceOri,
            source_dev: '',
            data_fim: '',
            hora_fim: ''
        });
    }
}
