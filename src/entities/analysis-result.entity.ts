import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { AttentionPoint } from './attention-point.entity';

@Entity('analysis_result')
export class AnalysisResult {
  @PrimaryColumn('varchar')
  id_analysis: string;

  @Column('varchar')
  status: string;

  @Column('varchar')
  dic: string;

  @Column('int')
  fontes: number;

  @Column('int')
  fontes_points: number;

  @Column('int')
  total_points: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => AttentionPoint, attentionPoint => attentionPoint.analysisResult, {
    cascade: true, // Adiciona esta linha
    onDelete: 'CASCADE' // Adiciona esta linha
  })
  attentionPoints: AttentionPoint[];
}
