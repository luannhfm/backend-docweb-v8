import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SourceFunction } from './source-function.entity';
import { SourceTable } from './source-table.entity';

@Entity('source')
export class Source {
  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar')
  label: string;

  @Column('varchar')
  category: string;

  @Column('varchar')
  name: string;

  @Column('int')
  tables: number;

  @Column('int')
  functions: number;

  @Column('text')
  source: string;

  @Column('int')
  line: number;

  @Column('int')
  blankLines: number;

  @Column('int')
  commentedLines: number;

  @Column('smallint', { default: 0 })
  status: number;

  @Column('boolean')
  reserv: boolean;

  @OneToMany(() => SourceFunction, sourceFunction => sourceFunction.Source)
  Functions: SourceFunction[];

  @OneToMany(() => SourceTable, sourceTable => sourceTable.source)
  Tables: SourceTable[];
}
