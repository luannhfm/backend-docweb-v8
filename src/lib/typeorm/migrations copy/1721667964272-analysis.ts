import { MigrationInterface, QueryRunner } from "typeorm";

export class Analysis1721667964272 implements MigrationInterface {
    name = 'Analysis1721667964272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("category" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_dab3b9cd30b5940f3a808316991" PRIMARY KEY ("category"))`);
        await queryRunner.query(`CREATE TABLE "hist_source" ("id" SERIAL NOT NULL, "fonte" character varying NOT NULL, "user" character varying NOT NULL, "action" character varying NOT NULL, "commit" character varying NOT NULL, "source" text NOT NULL, "sourceOld" text, CONSTRAINT "PK_8d77a0c28c829f414434bbdb240" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "group" character varying NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis" ("id_analysis" character varying NOT NULL, "analysis" json NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_b1f137b9b62b0fa509970379b19" PRIMARY KEY ("id_analysis"))`);
        await queryRunner.query(`CREATE TABLE "source_function" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "sourceId" integer, CONSTRAINT "PK_dda489c69f4eed645a6fa0a9e12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source_table_field" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying NOT NULL, "sourceTableId" integer, CONSTRAINT "PK_c430380342d716ce744008a28d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source_table" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying NOT NULL, "sourceId" integer, CONSTRAINT "PK_ab8e7571a21eb389978446e0a31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "source" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "label" character varying NOT NULL, "category" character varying NOT NULL, "name" character varying NOT NULL, "tables" integer NOT NULL, "functions" integer NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "status" smallint NOT NULL DEFAULT '0', "reserv" boolean NOT NULL, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reserv" ("id" SERIAL NOT NULL, "fonte" character varying NOT NULL, "dev" character varying NOT NULL, "data_ini" character varying NOT NULL, "hora" character varying NOT NULL, "data_fim" character varying, "hora_fim" character varying, "source_ori" text NOT NULL, "source_dev" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_458eb6eb08beb775a0ebb27ec82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "difference" ("id" SERIAL NOT NULL, "attention_point_id" integer NOT NULL, "source_name" character varying NOT NULL, "environment" character varying NOT NULL, "table_name" character varying NOT NULL, "key" character varying NOT NULL, "value" character varying NOT NULL, "attentionPointId" integer, CONSTRAINT "PK_1f0268f35add6e02298815c19f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attention_point" ("id" SERIAL NOT NULL, "id_analysis" character varying NOT NULL, "source_name" character varying NOT NULL, "point_number" integer NOT NULL, "total_points" integer NOT NULL, "line_numbers" character varying NOT NULL, "category" character varying NOT NULL, "analysisResultIdAnalysis" character varying, CONSTRAINT "PK_823e83621b2de4ccea92a0e1797" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis_result" ("id_analysis" character varying NOT NULL, "status" character varying NOT NULL, "dic" character varying NOT NULL, "fontes" integer NOT NULL, "fontes_points" integer NOT NULL, "total_points" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7888e10e7871645fb54cf5dcfd8" PRIMARY KEY ("id_analysis"))`);
       // await queryRunner.query(`ALTER TABLE "source_function" ADD CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
       // await queryRunner.query(`ALTER TABLE "source_table_field" ADD CONSTRAINT "FK_789ee8f302a82e3356fd141b09f" FOREIGN KEY ("sourceTableId") REFERENCES "source_table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
       // await queryRunner.query(`ALTER TABLE "source_table" ADD CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
       // await queryRunner.query(`ALTER TABLE "difference" ADD CONSTRAINT "FK_bf62777ff0e76091abe3c76efba" FOREIGN KEY ("attentionPointId") REFERENCES "attention_point"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        //await queryRunner.query(`ALTER TABLE "attention_point" ADD CONSTRAINT "FK_8f0b035b2f24acfe06e5102d08d" FOREIGN KEY ("analysisResultIdAnalysis") REFERENCES "analysis_result"("id_analysis") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attention_point" DROP CONSTRAINT "FK_8f0b035b2f24acfe06e5102d08d"`);
        await queryRunner.query(`ALTER TABLE "difference" DROP CONSTRAINT "FK_bf62777ff0e76091abe3c76efba"`);
        await queryRunner.query(`ALTER TABLE "source_table" DROP CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6"`);
        await queryRunner.query(`ALTER TABLE "source_table_field" DROP CONSTRAINT "FK_789ee8f302a82e3356fd141b09f"`);
        await queryRunner.query(`ALTER TABLE "source_function" DROP CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b"`);
        await queryRunner.query(`DROP TABLE "analysis_result"`);
        await queryRunner.query(`DROP TABLE "attention_point"`);
        await queryRunner.query(`DROP TABLE "difference"`);
        await queryRunner.query(`DROP TABLE "reserv"`);
        await queryRunner.query(`DROP TABLE "source"`);
        await queryRunner.query(`DROP TABLE "source_table"`);
        await queryRunner.query(`DROP TABLE "source_table_field"`);
        await queryRunner.query(`DROP TABLE "source_function"`);
        await queryRunner.query(`DROP TABLE "analysis"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "hist_source"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
