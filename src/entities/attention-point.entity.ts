import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { AnalysisResult } from './analysis-result.entity';
import { Difference } from './difference.entity';

@Entity('attention_point')
export class AttentionPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  id_analysis: string;

  @Column('varchar')
  source_name: string;

  @Column('int')
  point_number: number;

  @Column('int')
  total_points: number;

  @Column('varchar')
  line_numbers: string;

  @Column('varchar')
  category: string;

  @ManyToOne(() => AnalysisResult, analysisResult => analysisResult.attentionPoints)
  analysisResult: AnalysisResult;

  @OneToMany(() => Difference, difference => difference.attentionPoint)
  differences: Difference[];
}
