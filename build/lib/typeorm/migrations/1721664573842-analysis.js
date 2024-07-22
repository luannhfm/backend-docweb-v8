"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/typeorm/migrations/1721664573842-analysis.ts
var analysis_exports = {};
__export(analysis_exports, {
  Analysis1721666809328: () => Analysis1721666809328
});
module.exports = __toCommonJS(analysis_exports);
var bcrypt = __toESM(require("bcrypt"));
var Analysis1721666809328 = class {
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "category" (
            "category" VARCHAR PRIMARY KEY , 
            "content" VARCHAR NOT NULL
           
        )`);
    await queryRunner.query(`CREATE TABLE "hist_source" (
            "id" SERIAL PRIMARY KEY, 
            "fonte" VARCHAR NOT NULL, 
            "user" VARCHAR NOT NULL, 
            "action" VARCHAR NOT NULL, 
            "commit" VARCHAR NOT NULL, 
            "source" text NOT NULL, 
            "sourceOld" text

        )`);
    await queryRunner.query(`CREATE TABLE "users" (
            "id" VARCHAR PRIMARY KEY, 
            "nome" VARCHAR NOT NULL, 
            "email" VARCHAR NOT NULL, 
            "senha" VARCHAR NOT NULL, 
            "group" VARCHAR NOT NULL, 
            "admin" boolean NOT NULL
           
        )`);
    await queryRunner.query(`CREATE TABLE "analysis" (
            "id_analysis" VARCHAR PRIMARY KEY, 
            "analysis" json NOT NULL, 
            "status" VARCHAR NOT NULL
        )`);
    await queryRunner.query(`CREATE TABLE "source_function" (
            "id" SERIAL PRIMARY KEY, 
            "type" VARCHAR NOT NULL, 
            "name" VARCHAR NOT NULL, 
            "source" text NOT NULL, 
            "line" integer NOT NULL, 
            "blankLines" integer NOT NULL, 
            "commentedLines" integer NOT NULL, 
            "sourceId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "source_table_field" (
            "id" SERIAL PRIMARY KEY, 
            "name" VARCHAR NOT NULL, 
            "sourceTableId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "source_table" (
            "id" SERIAL PRIMARY KEY,
            "name" VARCHAR NOT NULL, 
            "sourceId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "source" (
            "id" SERIAL PRIMARY KEY,
            "label" VARCHAR NOT NULL, 
            "category" VARCHAR NOT NULL, 
            "name" VARCHAR NOT NULL, 
            "tables" integer NOT NULL, 
            "functions" integer NOT NULL, 
            "source" text NOT NULL, 
            "line" integer NOT NULL, 
            "blankLines" integer NOT NULL, 
            "commentedLines" integer NOT NULL, 
            "status" smallint NOT NULL DEFAULT '0', 
            "reserv" boolean NOT NULL
        )`);
    await queryRunner.query(`CREATE TABLE "reserv" (
            "id" SERIAL PRIMARY KEY, 
            "fonte" VARCHAR NOT NULL, 
            "dev" VARCHAR NOT NULL, 
            "data_ini" VARCHAR NOT NULL, 
            "hora" VARCHAR NOT NULL, 
            "data_fim" VARCHAR, 
            "hora_fim" VARCHAR, 
            "source_ori" text NOT NULL, 
            "source_dev" text, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now() 
            )`);
    await queryRunner.query(`CREATE TABLE "difference" (
            "id" SERIAL PRIMARY KEY, 
            "attention_point_id" integer NOT NULL, 
            "source_name" VARCHAR NOT NULL, 
            "environment" VARCHAR NOT NULL, 
            "table_name" VARCHAR NOT NULL, 
            "key" VARCHAR NOT NULL, 
            "value" VARCHAR NOT NULL, 
            "attentionPointId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "attention_point" (
            "id" SERIAL PRIMARY KEY, 
            "id_analysis" VARCHAR NOT NULL, 
            "source_name" VARCHAR NOT NULL, 
            "point_number" integer NOT NULL, 
            "total_points" integer NOT NULL, 
            "line_numbers" VARCHAR NOT NULL, 
            "category" VARCHAR NOT NULL, 
            "analysisResultIdAnalysis" VARCHAR
        )`);
    await queryRunner.query(`CREATE TABLE "analysis_result" (
            "id_analysis" VARCHAR PRIMARY KEY, 
            "status" VARCHAR NOT NULL, 
            "dic" VARCHAR NOT NULL, 
            "fontes" integer NOT NULL, 
            "fontes_points" integer NOT NULL, 
            "total_points" integer NOT NULL, 
            "created_at" TIMESTAMP NOT NULL DEFAULT now()
        )`);
    await queryRunner.query(`ALTER TABLE "source_function" ADD CONSTRAINT FK_SOURCE_FUNCTION_SOURCE FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "source_table_field" ADD CONSTRAINT FK_SOURCE_TABLE_FIELD_SOURCE_TABLE FOREIGN KEY ("sourceTableId") REFERENCES "source_table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "source_table" ADD CONSTRAINT FK_SOURCE_TABLE_SOURCE FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "difference" ADD CONSTRAINT FK_DIFFERENCE_ATTETION_POINT FOREIGN KEY ("attentionPointId") REFERENCES "attention_point"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "attention_point" ADD CONSTRAINT FK_ATTETION_POINT_ANALYSIS_RESULT FOREIGN KEY ("analysisResultIdAnalysis") REFERENCES "analysis_result"("id_analysis") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    const passwordHash = await bcrypt.hash("admin", 10);
    await queryRunner.query(`
            INSERT INTO "users" ("id", "nome", "email", "senha", "group", "admin") 
            VALUES ('admin', 'admin', ' ', '${passwordHash}', 'admin', true)
        `);
    await queryRunner.query(`
            INSERT INTO "category" ("category", "content") 
            VALUES 
            ('PONTO DE ENTRADA', 'Express\xF5es presentes no arquivo values.txt'),
            ('CADASTROS', 'axcadastro;mbrowse;twbrowse'),
            ('RELAT\xD3RIOS', 'axrelatorio; setprint; printer; treport'),
            ('CLASSES', 'class')
        `);
  }
  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "attention_point" DROP CONSTRAINT FK_ATTETION_POINT_ANALYSIS_RESULT`);
    await queryRunner.query(`ALTER TABLE "difference" DROP CONSTRAINT FK_DIFFERENCE_ATTETION_POINT`);
    await queryRunner.query(`ALTER TABLE "source_table" DROP CONSTRAINT FK_SOURCE_TABLE_SOURCE`);
    await queryRunner.query(`ALTER TABLE "source_table_field" DROP CONSTRAINT FK_SOURCE_TABLE_FIELD_SOURCE_TABLE`);
    await queryRunner.query(`ALTER TABLE "source_function" DROP CONSTRAINT FK_SOURCE_FUNCTION_SOURCE`);
    await queryRunner.query(`DROP TABLE "analysis_result"`);
    await queryRunner.query(`DROP TABLE "attention_point"`);
    await queryRunner.query(`DROP TABLE "difference"`);
    await queryRunner.query(`DROP TABLE "source"`);
    await queryRunner.query(`DROP TABLE "source_table"`);
    await queryRunner.query(`DROP TABLE "source_table_field"`);
    await queryRunner.query(`DROP TABLE "source_function"`);
    await queryRunner.query(`DROP TABLE "analysis"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "reserv"`);
    await queryRunner.query(`DROP TABLE "hist_source"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Analysis1721666809328
});
