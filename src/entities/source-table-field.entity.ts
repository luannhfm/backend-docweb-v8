import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SourceTable } from './source-table.entity';

@Entity('source_table_field')
export class SourceTableField {
  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar')
  name: string;

  @ManyToOne(() => SourceTable, sourceTable => sourceTable.fields, { onDelete: 'CASCADE' })
  sourceTable: SourceTable;
}
