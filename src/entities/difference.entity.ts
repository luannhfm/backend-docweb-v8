import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AttentionPoint } from './attention-point.entity';

@Entity('difference')
export class Difference {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  attention_point_id: number;

  @Column('varchar')
  source_name: string;

  @Column('varchar')
  environment: string;

  @Column('varchar')
  table_name: string;

  @Column('varchar')
  key: string;

  @Column('varchar')
  value: string;

  @ManyToOne(() => AttentionPoint, attentionPoint => attentionPoint.differences)
  attentionPoint: AttentionPoint;
}
