import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'varchar' })
  id: string; // Usando 'id' como nome de login

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  senha: string;

  @Column({ type: 'varchar' }) 
  group: string;

  @Column({ type: 'boolean' })
  admin: boolean; // Adicionando o campo 'admin'
}
