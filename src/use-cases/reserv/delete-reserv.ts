import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { SourceRepository } from '@/repositories/typeorm/source.repository';

export class DeleteReservUseCase {
    constructor(
        private reservRepository: ReservRepository,
        private sourceRepository: SourceRepository
    ) {}

    async handler(id: string): Promise<void> {
        const reservEntry = await this.reservRepository.findById(id);
        if (!reservEntry) {
            throw new Error('Registro não encontrado.');
        }

        const sourceEntry = await this.sourceRepository.findByPrw(reservEntry.fonte);
        if (!sourceEntry) {
            throw new Error('Fonte não encontrada na tabela Source.');
        }

        await this.sourceRepository.updateReservStatus(reservEntry.fonte, false, null);
        await this.reservRepository.deleteById(id);
    }
}
