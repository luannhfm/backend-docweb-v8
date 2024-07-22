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

// src/lib/typeorm/migrations/1721316093200-tables.ts
var tables_exports = {};
__export(tables_exports, {
  Tables1721316093200: () => Tables1721316093200
});
module.exports = __toCommonJS(tables_exports);
var bcrypt = __toESM(require("bcryptjs"));
var Tables1721316093200 = class {
  constructor() {
    this.name = "Tables1721316093200";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "group" character varying NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    const passwordHash = await bcrypt.hash("admin", 10);
    await queryRunner.query(`
            INSERT INTO "users" ("id", "nome", "email", "senha", "group", "admin") 
            VALUES ('admin', 'admin', ' ', '${passwordHash}', 'admin', true)
        `);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "users"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tables1721316093200
});
