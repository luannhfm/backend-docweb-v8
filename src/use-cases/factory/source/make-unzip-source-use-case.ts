import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { HistRepository } from '@/repositories/typeorm/history.repository';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { SourceFunctionRepository } from '@/repositories/typeorm/source-function.repository';
import { SourceTableRepository } from '@/repositories/typeorm/source-table.repository';
import { SourceTableFieldRepository } from '@/repositories/typeorm/source-table-field.repository';
import { UnzipSourceUseCase } from '@/use-cases/source/unzip-source';

export function makeUnzipSourceUseCase() {
  const sourceRepository = new SourceRepository();
  const histRepository = new HistRepository();
  const reservRepository = new ReservRepository();
  const sourceFunctionRepository = new SourceFunctionRepository();
  const sourceTableRepository = new SourceTableRepository();
  const sourceTableFieldRepository = new SourceTableFieldRepository();
  
  return new UnzipSourceUseCase(
    sourceRepository,
    histRepository,
    reservRepository,
    sourceFunctionRepository,
    sourceTableRepository,
    sourceTableFieldRepository
  );
}
