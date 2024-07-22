import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('analysis')
export class Analysis {
  @PrimaryColumn({ type: 'varchar' })
  id_analysis: string;

  @Column({ type: 'json' })
  analysis: any;

  @Column({ type: 'varchar' })
  status: string;
}
