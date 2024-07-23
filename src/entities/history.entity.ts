import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hist_source')
export class Hist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  fonte: string;

  @Column('varchar')
  user: string;

  @Column('varchar')
  action: string;

  @Column('varchar')
  commit: string;

  @Column('text')
  source: string;

  @Column('text', { nullable: true })
  sourceOld: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
