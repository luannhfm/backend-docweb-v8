import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Source } from './source.entity';

@Entity('source_function')
export class SourceFunction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  uuid: string;

  @Column('varchar')
  type: string;

  @Column('varchar')
  name: string;

  @Column('text')
  source: string;

  @Column('integer')
  line: number;

  @Column('integer')
  blankLines: number;

  @Column('integer')
  commentedLines: number;

  @ManyToOne(() => Source, source => source.sourceFunctions, { onDelete: 'CASCADE' })
  sourceTxt: Source;
}
