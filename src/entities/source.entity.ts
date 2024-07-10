import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SourceFunction } from './source-function.entity';
import { SourceTable } from './source-table.entity';

@Entity('source')
export class Source {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  uuid: string;

  @Column('varchar')
  label: string;

  @Column('varchar')
  category: string;

  @Column('varchar')
  name: string;

  @Column('integer')
  tables: number;

  @Column('integer')
  functions: number;

  @Column('text')
  source: string;

  @Column('integer')
  line: number;

  @Column('integer')
  blankLines: number;

  @Column('integer')
  commentedLines: number;

  @Column('smallint')
  status: number;

  @Column('boolean')
  reserv: boolean;

  @OneToMany(() => SourceFunction, sourceFunction => sourceFunction.source)
  sourceFunctions: SourceFunction[];

  @OneToMany(() => SourceTable, sourceTable => sourceTable.source)
  sourceTables: SourceTable[];
}
