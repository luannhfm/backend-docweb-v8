import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables31721068855204 implements MigrationInterface {
    name = 'Tables31721068855204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "source_function" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "sourceId" integer, CONSTRAINT "PK_dda489c69f4eed645a6fa0a9e12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source_table_field" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying NOT NULL, "sourceTableId" integer, CONSTRAINT "PK_c430380342d716ce744008a28d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source_table" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying NOT NULL, "sourceId" integer, CONSTRAINT "PK_ab8e7571a21eb389978446e0a31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "label" character varying NOT NULL, "category" character varying NOT NULL, "name" character varying NOT NULL, "tables" integer NOT NULL, "functions" integer NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "status" smallint NOT NULL DEFAULT '0', "reserv" boolean NOT NULL, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "source_function" ADD CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "source_table_field" ADD CONSTRAINT "FK_789ee8f302a82e3356fd141b09f" FOREIGN KEY ("sourceTableId") REFERENCES "source_table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "source_table" ADD CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "source_table" DROP CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6"`);
        await queryRunner.query(`ALTER TABLE "source_table_field" DROP CONSTRAINT "FK_789ee8f302a82e3356fd141b09f"`);
        await queryRunner.query(`ALTER TABLE "source_function" DROP CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b"`);
        await queryRunner.query(`DROP TABLE "source"`);
        await queryRunner.query(`DROP TABLE "source_table"`);
        await queryRunner.query(`DROP TABLE "source_table_field"`);
        await queryRunner.query(`DROP TABLE "source_function"`);
    }

}
