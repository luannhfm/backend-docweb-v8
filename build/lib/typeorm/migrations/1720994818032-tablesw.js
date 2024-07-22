"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/typeorm/migrations/1720994818032-tablesw.ts
var tablesw_exports = {};
__export(tablesw_exports, {
  Tablesw1720994818032: () => Tablesw1720994818032
});
module.exports = __toCommonJS(tablesw_exports);
var Tablesw1720994818032 = class {
  constructor() {
    this.name = "Tablesw1720994818032";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "source_function" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uuid" character varying NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "sourceId" uuid, CONSTRAINT "PK_dda489c69f4eed645a6fa0a9e12" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "source_table_field" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uuid" character varying NOT NULL, "name" character varying NOT NULL, "tableId" uuid, CONSTRAINT "PK_c430380342d716ce744008a28d6" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "source_table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uuid" character varying NOT NULL, "name" character varying NOT NULL, "sourceId" uuid, CONSTRAINT "PK_ab8e7571a21eb389978446e0a31" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "source" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "uuid" character varying NOT NULL, "label" character varying NOT NULL, "category" character varying NOT NULL, "name" character varying NOT NULL, "tables" integer NOT NULL, "functions" integer NOT NULL, "source" text NOT NULL, "line" integer NOT NULL, "blankLines" integer NOT NULL, "commentedLines" integer NOT NULL, "status" smallint NOT NULL DEFAULT '0', "reserv" boolean NOT NULL, CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "reserv" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fonte" character varying NOT NULL, "dev" character varying NOT NULL, "data_ini" character varying NOT NULL, "hora" character varying NOT NULL, "data_fim" character varying, "hora_fim" character varying, "source_ori" text NOT NULL, "source_dev" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_458eb6eb08beb775a0ebb27ec82" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "source_function" ADD CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "source_table_field" ADD CONSTRAINT "FK_810b8c67734186b0bb16f7689db" FOREIGN KEY ("tableId") REFERENCES "source_table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "source_table" ADD CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
  }
  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "source_table" DROP CONSTRAINT "FK_f3a454267ed6fa2484c4ff96db6"`);
    await queryRunner.query(`ALTER TABLE "source_table_field" DROP CONSTRAINT "FK_810b8c67734186b0bb16f7689db"`);
    await queryRunner.query(`ALTER TABLE "source_function" DROP CONSTRAINT "FK_2941dc4eaf8edcc78e272eedc9b"`);
    await queryRunner.query(`DROP TABLE "reserv"`);
    await queryRunner.query(`DROP TABLE "source"`);
    await queryRunner.query(`DROP TABLE "source_table"`);
    await queryRunner.query(`DROP TABLE "source_table_field"`);
    await queryRunner.query(`DROP TABLE "source_function"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tablesw1720994818032
});