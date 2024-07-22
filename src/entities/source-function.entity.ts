import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Source } from './source.entity';

@Entity('source_function')
export class SourceFunction {
  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar')
  type: string;

  @Column('varchar')
  name: string;

  @Column('text')
  source: string;

  @Column('int')
  line: number;

  @Column('int')
  blankLines: number;

  @Column('int')
  commentedLines: number;

  @ManyToOne(() => Source, source => source.Functions, { onDelete: 'CASCADE' })
  Source: Source;
}
