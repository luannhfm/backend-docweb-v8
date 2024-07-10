import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryColumn('varchar') 
  category: string;

  @Column('varchar') 
  content: string;
}
