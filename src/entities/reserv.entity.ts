// src/entities/reserv.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reserv')
export class Reserv {
  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar')
  fonte: string;

  @Column('varchar')
  dev: string;

  @Column('varchar')
  data_ini: string;

  @Column('varchar')
  hora: string;

  @Column('varchar', { nullable: true })
  data_fim: string;

  @Column('varchar', { nullable: true })
  hora_fim: string;

  @Column('text')
  source_ori: string;

  @Column('text', { nullable: true })
  source_dev: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
