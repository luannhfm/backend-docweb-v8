import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { DeleteAllSourcesUseCase } from '@/use-cases/source/delete-all-sources';

export function makeDeleteAllSourcesUseCase() {
  const sourceRepository = new SourceRepository();
  return new DeleteAllSourcesUseCase(sourceRepository);
}
