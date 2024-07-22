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

// src/lib/typeorm/migrations copy/1720736106023-tables.ts
var tables_exports = {};
__export(tables_exports, {
  Tables1720736106023: () => Tables1720736106023
});
module.exports = __toCommonJS(tables_exports);
var Tables1720736106023 = class {
  constructor() {
    this.name = "Tables1720736106023";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "category" ("category" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_dab3b9cd30b5940f3a808316991" PRIMARY KEY ("category"))`);
    await queryRunner.query(`CREATE TABLE "hist_source" ("id" SERIAL NOT NULL, "fonte" character varying NOT NULL, "user" character varying NOT NULL, "action" character varying NOT NULL, "commit" character varying NOT NULL, "source" text NOT NULL, "sourceOld" text, CONSTRAINT "PK_8d77a0c28c829f414434bbdb240" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "group" character varying NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "analysis" ("id_analysis" character varying NOT NULL, "analysis" json NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_b1f137b9b62b0fa509970379b19" PRIMARY KEY ("id_analysis"))`);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "analysis"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "hist_source"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tables1720736106023
});
