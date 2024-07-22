import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Source } from './source.entity';
import { SourceTableField } from './source-table-field.entity';

@Entity('source_table')
export class SourceTable {
  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar')
  name: string;

  @ManyToOne(() => Source, source => source.Tables, { onDelete: 'CASCADE' })
  source: Source;

  @OneToMany(() => SourceTableField, sourceTableField => sourceTableField.sourceTable)
  fields: SourceTableField[];
}
