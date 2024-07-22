import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { SourceFunctionRepository } from '@/repositories/typeorm/source-function.repository';
import { SourceTableRepository } from '@/repositories/typeorm/source-table.repository';
import { SourceTableFieldRepository } from '@/repositories/typeorm/source-table-field.repository';
import { GetSourceDetailUseCase } from '@/use-cases/source/get-source-detail';

export function makeGetSourceDetailUseCase() {
  const sourceRepository = new SourceRepository();
  const sourceFunctionRepository = new SourceFunctionRepository();
  const sourceTableRepository = new SourceTableRepository();
  const sourceTableFieldRepository = new SourceTableFieldRepository();
  
  return new GetSourceDetailUseCase(
    sourceRepository,
    sourceFunctionRepository,
    sourceTableRepository,
    sourceTableFieldRepository
  );
}
