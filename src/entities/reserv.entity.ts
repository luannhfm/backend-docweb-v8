import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('reserv')
export class Reserv {
  static create(arg0: { fonte: string; dev: string; data_ini: string; hora: string; source_ori: string; source_dev: null; data_fim: null; hora_fim: null; }) {
      throw new Error('Method not implemented.');
  }
  toJSON(): any {
    throw new Error('Method not implemented.');
  }
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
