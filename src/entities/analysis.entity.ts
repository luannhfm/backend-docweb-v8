import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('analysis')
export class Analysis {
  @PrimaryColumn('uuid')
  id_analysis: string;

  @Column({ type: 'json' })
  analysis: any;

  @Column({ type: 'varchar' })
  status: string;
}
