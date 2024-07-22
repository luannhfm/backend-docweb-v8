import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1720736106023 implements MigrationInterface {
    name = 'Tables1720736106023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("category" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_dab3b9cd30b5940f3a808316991" PRIMARY KEY ("category"))`);
        await queryRunner.query(`CREATE TABLE "hist_source" ("id" SERIAL NOT NULL, "fonte" character varying NOT NULL, "user" character varying NOT NULL, "action" character varying NOT NULL, "commit" character varying NOT NULL, "source" text NOT NULL, "sourceOld" text, CONSTRAINT "PK_8d77a0c28c829f414434bbdb240" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "group" character varying NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis" ("id_analysis" character varying NOT NULL, "analysis" json NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_b1f137b9b62b0fa509970379b19" PRIMARY KEY ("id_analysis"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "analysis"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "hist_source"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
