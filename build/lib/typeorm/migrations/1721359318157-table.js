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

// src/lib/typeorm/migrations/1721359318157-table.ts
var table_exports = {};
__export(table_exports, {
  Table1721359318157: () => Table1721359318157
});
module.exports = __toCommonJS(table_exports);
var Table1721359318157 = class {
  constructor() {
    //npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/lib/typeorm/migrations/analysis -d src/lib/typeorm/typeorm.ts
    this.name = "Table1721359318157";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "difference" ("id" SERIAL NOT NULL, "attention_point_id" integer NOT NULL, "source_name" character varying NOT NULL, "environment" character varying NOT NULL, "table_name" character varying NOT NULL, "key" character varying NOT NULL, "value" character varying NOT NULL, "attentionPointId" integer, CONSTRAINT "PK_1f0268f35add6e02298815c19f2" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "attention_point" ("id" SERIAL NOT NULL, "id_analysis" character varying NOT NULL, "source_name" character varying NOT NULL, "point_number" integer NOT NULL, "total_points" integer NOT NULL, "line_numbers" character varying NOT NULL, "category" character varying NOT NULL, "analysisResultIdAnalysis" character varying, CONSTRAINT "PK_823e83621b2de4ccea92a0e1797" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "analysis_result" ("id_analysis" character varying NOT NULL, "status" character varying NOT NULL, "dic" character varying NOT NULL, "fontes" integer NOT NULL, "fontes_points" integer NOT NULL, "total_points" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7888e10e7871645fb54cf5dcfd8" PRIMARY KEY ("id_analysis"))`);
    await queryRunner.query(`ALTER TABLE "difference" ADD CONSTRAINT "FK_bf62777ff0e76091abe3c76efba" FOREIGN KEY ("attentionPointId") REFERENCES "attention_point"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "attention_point" ADD CONSTRAINT "FK_8f0b035b2f24acfe06e5102d08d" FOREIGN KEY ("analysisResultIdAnalysis") REFERENCES "analysis_result"("id_analysis") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }
  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "attention_point" DROP CONSTRAINT "FK_8f0b035b2f24acfe06e5102d08d"`);
    await queryRunner.query(`ALTER TABLE "difference" DROP CONSTRAINT "FK_bf62777ff0e76091abe3c76efba"`);
    await queryRunner.query(`DROP TABLE "analysis_result"`);
    await queryRunner.query(`DROP TABLE "attention_point"`);
    await queryRunner.query(`DROP TABLE "difference"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table1721359318157
});
