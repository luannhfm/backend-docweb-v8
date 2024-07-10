import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SourceTable } from './source-table.entity';

@Entity('source_table_field')
export class SourceTableField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  uuid: string;

  @Column('varchar')
  name: string;

  @ManyToOne(() => SourceTable, sourceTable => sourceTable.sourceTableFields, { onDelete: 'CASCADE' })
  sourceTable: SourceTable;
}
