// src/use-cases/source/get-source-detail.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { SourceFunctionRepository } from '@/repositories/typeorm/source-function.repository';
import { SourceTableRepository } from '@/repositories/typeorm/source-table.repository';
import { Source } from '@/entities/source.entity';
import { SourceTableFieldRepository } from '@/repositories/typeorm/source-table-field.repository';

export class GetSourceDetailUseCase {
  constructor(
    private sourceRepository: SourceRepository,
    private sourceFunctionRepository: SourceFunctionRepository,
    private sourceTableRepository: SourceTableRepository,
    private sourceTableFieldRepository: SourceTableFieldRepository
  ) {}

  async handler(id: number): Promise<Source | null> {
    const source = await this.sourceRepository.findById(id);
    if (!source) {
      return null;
    }

    const functions = await this.sourceFunctionRepository.findBySource(id);
    const tables = await this.sourceTableRepository.findBySource(id);

    for (const table of tables) {
      const fields = await this.sourceTableFieldRepository.findBySourceTable(table.id);
      table.fields = fields;
    }

    source.Functions = functions;
    source.Tables = tables;

    return source;
  }
}