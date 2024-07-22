import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from 'bcryptjs';
export class Tables1721316093200 implements MigrationInterface {
    name = 'Tables1721316093200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "group" character varying NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
   
        // Hash da senha do usuário admin
        const passwordHash = await bcrypt.hash('admin', 10);

        // Inserção do usuário admin
        await queryRunner.query(`
            INSERT INTO "users" ("id", "nome", "email", "senha", "group", "admin") 
            VALUES ('admin', 'admin', ' ', '${passwordHash}', 'admin', true)
        `);
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
