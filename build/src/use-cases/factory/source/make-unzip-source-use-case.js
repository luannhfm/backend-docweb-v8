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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/use-cases/factory/source/make-unzip-source-use-case.ts
var make_unzip_source_use_case_exports = {};
__export(make_unzip_source_use_case_exports, {
  makeUnzipSourceUseCase: () => makeUnzipSourceUseCase
});
module.exports = __toCommonJS(make_unzip_source_use_case_exports);

// src/entities/source.entity.ts
var import_typeorm4 = require("typeorm");

// src/entities/source-function.entity.ts
var import_typeorm = require("typeorm");
var SourceFunction = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], SourceFunction.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("uuid")
], SourceFunction.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], SourceFunction.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], SourceFunction.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], SourceFunction.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => Source, (source) => source.Functions, { onDelete: "CASCADE" })
], SourceFunction.prototype, "Source", 2);
SourceFunction = __decorateClass([
  (0, import_typeorm.Entity)("source_function")
], SourceFunction);

// src/entities/source-table.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/source-table-field.entity.ts
var import_typeorm2 = require("typeorm");
var SourceTableField = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)()
], SourceTableField.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)("uuid")
], SourceTableField.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], SourceTableField.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => SourceTable, (sourceTable) => sourceTable.fields, { onDelete: "CASCADE" })
], SourceTableField.prototype, "sourceTable", 2);
SourceTableField = __decorateClass([
  (0, import_typeorm2.Entity)("source_table_field")
], SourceTableField);

// src/entities/source-table.entity.ts
var SourceTable = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)()
], SourceTable.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)("uuid")
], SourceTable.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], SourceTable.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.ManyToOne)(() => Source, (source) => source.Tables, { onDelete: "CASCADE" })
], SourceTable.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)(() => SourceTableField, (sourceTableField) => sourceTableField.sourceTable)
], SourceTable.prototype, "fields", 2);
SourceTable = __decorateClass([
  (0, import_typeorm3.Entity)("source_table")
], SourceTable);

// src/entities/source.entity.ts
var Source = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryGeneratedColumn)()
], Source.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)("uuid")
], Source.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm4.Column)("varchar")
], Source.prototype, "label", 2);
__decorateClass([
  (0, import_typeorm4.Column)("varchar")
], Source.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm4.Column)("varchar")
], Source.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm4.Column)("int")
], Source.prototype, "tables", 2);
__decorateClass([
  (0, import_typeorm4.Column)("int")
], Source.prototype, "functions", 2);
__decorateClass([
  (0, import_typeorm4.Column)("text")
], Source.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm4.Column)("int")
], Source.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm4.Column)("int")
], Source.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm4.Column)("int")
], Source.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm4.Column)("smallint", { default: 0 })
], Source.prototype, "status", 2);
__decorateClass([
  (0, import_typeorm4.Column)("boolean")
], Source.prototype, "reserv", 2);
__decorateClass([
  (0, import_typeorm4.OneToMany)(() => SourceFunction, (sourceFunction) => sourceFunction.Source)
], Source.prototype, "Functions", 2);
__decorateClass([
  (0, import_typeorm4.OneToMany)(() => SourceTable, (sourceTable) => sourceTable.source)
], Source.prototype, "Tables", 2);
Source = __decorateClass([
  (0, import_typeorm4.Entity)("source")
], Source);

// src/lib/typeorm/typeorm.ts
var import_typeorm13 = require("typeorm");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3e3),
  DATABASE_HOST: import_zod.z.string(),
  DATABASE_USER: import_zod.z.string(),
  DATABASE_PASSWORD: import_zod.z.string(),
  DATABASE_NAME: import_zod.z.string(),
  DATABASE_PORT: import_zod.z.coerce.number(),
  JWT_SECRET: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/lib/typeorm/typeorm.ts
var import_console = require("console");

// src/entities/category.entity.ts
var import_typeorm5 = require("typeorm");
var Category = class {
};
__decorateClass([
  (0, import_typeorm5.PrimaryColumn)("varchar")
], Category.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm5.Column)("varchar")
], Category.prototype, "content", 2);
Category = __decorateClass([
  (0, import_typeorm5.Entity)("category")
], Category);

// src/entities/history.entity.ts
var import_typeorm6 = require("typeorm");
var Hist = class {
};
__decorateClass([
  (0, import_typeorm6.PrimaryGeneratedColumn)()
], Hist.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm6.Column)("varchar")
], Hist.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm6.Column)("varchar")
], Hist.prototype, "user", 2);
__decorateClass([
  (0, import_typeorm6.Column)("varchar")
], Hist.prototype, "action", 2);
__decorateClass([
  (0, import_typeorm6.Column)("varchar")
], Hist.prototype, "commit", 2);
__decorateClass([
  (0, import_typeorm6.Column)("text")
], Hist.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm6.Column)("text", { nullable: true })
], Hist.prototype, "sourceOld", 2);
Hist = __decorateClass([
  (0, import_typeorm6.Entity)("hist_source")
], Hist);

// src/entities/user.entity.ts
var import_typeorm7 = require("typeorm");
var User = class {
  // Adicionando o campo 'admin'
};
__decorateClass([
  (0, import_typeorm7.PrimaryColumn)({ type: "varchar" })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm7.Column)({ type: "varchar" })
], User.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm7.Column)({ type: "varchar" })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm7.Column)({ type: "varchar" })
], User.prototype, "senha", 2);
__decorateClass([
  (0, import_typeorm7.Column)({ type: "varchar" })
], User.prototype, "group", 2);
__decorateClass([
  (0, import_typeorm7.Column)({ type: "boolean" })
], User.prototype, "admin", 2);
User = __decorateClass([
  (0, import_typeorm7.Entity)("users")
], User);

// src/entities/analysis.entity.ts
var import_typeorm8 = require("typeorm");
var Analysis = class {
};
__decorateClass([
  (0, import_typeorm8.PrimaryColumn)({ type: "varchar" })
], Analysis.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm8.Column)({ type: "json" })
], Analysis.prototype, "analysis", 2);
__decorateClass([
  (0, import_typeorm8.Column)({ type: "varchar" })
], Analysis.prototype, "status", 2);
Analysis = __decorateClass([
  (0, import_typeorm8.Entity)("analysis")
], Analysis);

// src/entities/reserv.entity.ts
var import_typeorm9 = require("typeorm");
var Reserv = class {
};
__decorateClass([
  (0, import_typeorm9.PrimaryGeneratedColumn)()
], Reserv.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar")
], Reserv.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar")
], Reserv.prototype, "dev", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar")
], Reserv.prototype, "data_ini", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar")
], Reserv.prototype, "hora", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar", { nullable: true })
], Reserv.prototype, "data_fim", 2);
__decorateClass([
  (0, import_typeorm9.Column)("varchar", { nullable: true })
], Reserv.prototype, "hora_fim", 2);
__decorateClass([
  (0, import_typeorm9.Column)("text")
], Reserv.prototype, "source_ori", 2);
__decorateClass([
  (0, import_typeorm9.Column)("text", { nullable: true })
], Reserv.prototype, "source_dev", 2);
__decorateClass([
  (0, import_typeorm9.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP" })
], Reserv.prototype, "createdAt", 2);
Reserv = __decorateClass([
  (0, import_typeorm9.Entity)("reserv")
], Reserv);

// src/entities/analysis-result.entity.ts
var import_typeorm12 = require("typeorm");

// src/entities/attention-point.entity.ts
var import_typeorm11 = require("typeorm");

// src/entities/difference.entity.ts
var import_typeorm10 = require("typeorm");
var Difference = class {
};
__decorateClass([
  (0, import_typeorm10.PrimaryGeneratedColumn)()
], Difference.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm10.Column)("int")
], Difference.prototype, "attention_point_id", 2);
__decorateClass([
  (0, import_typeorm10.Column)("varchar")
], Difference.prototype, "source_name", 2);
__decorateClass([
  (0, import_typeorm10.Column)("varchar")
], Difference.prototype, "environment", 2);
__decorateClass([
  (0, import_typeorm10.Column)("varchar")
], Difference.prototype, "table_name", 2);
__decorateClass([
  (0, import_typeorm10.Column)("varchar")
], Difference.prototype, "key", 2);
__decorateClass([
  (0, import_typeorm10.Column)("varchar")
], Difference.prototype, "value", 2);
__decorateClass([
  (0, import_typeorm10.ManyToOne)(() => AttentionPoint, (attentionPoint) => attentionPoint.differences)
], Difference.prototype, "attentionPoint", 2);
Difference = __decorateClass([
  (0, import_typeorm10.Entity)("difference")
], Difference);

// src/entities/attention-point.entity.ts
var AttentionPoint = class {
};
__decorateClass([
  (0, import_typeorm11.PrimaryGeneratedColumn)()
], AttentionPoint.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm11.Column)("varchar")
], AttentionPoint.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm11.Column)("varchar")
], AttentionPoint.prototype, "source_name", 2);
__decorateClass([
  (0, import_typeorm11.Column)("int")
], AttentionPoint.prototype, "point_number", 2);
__decorateClass([
  (0, import_typeorm11.Column)("int")
], AttentionPoint.prototype, "total_points", 2);
__decorateClass([
  (0, import_typeorm11.Column)("varchar")
], AttentionPoint.prototype, "line_numbers", 2);
__decorateClass([
  (0, import_typeorm11.Column)("varchar")
], AttentionPoint.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm11.ManyToOne)(() => AnalysisResult, (analysisResult) => analysisResult.attentionPoints)
], AttentionPoint.prototype, "analysisResult", 2);
__decorateClass([
  (0, import_typeorm11.OneToMany)(() => Difference, (difference) => difference.attentionPoint)
], AttentionPoint.prototype, "differences", 2);
AttentionPoint = __decorateClass([
  (0, import_typeorm11.Entity)("attention_point")
], AttentionPoint);

// src/entities/analysis-result.entity.ts
var AnalysisResult = class {
};
__decorateClass([
  (0, import_typeorm12.PrimaryColumn)("varchar")
], AnalysisResult.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm12.Column)("varchar")
], AnalysisResult.prototype, "status", 2);
__decorateClass([
  (0, import_typeorm12.Column)("varchar")
], AnalysisResult.prototype, "dic", 2);
__decorateClass([
  (0, import_typeorm12.Column)("int")
], AnalysisResult.prototype, "fontes", 2);
__decorateClass([
  (0, import_typeorm12.Column)("int")
], AnalysisResult.prototype, "fontes_points", 2);
__decorateClass([
  (0, import_typeorm12.Column)("int")
], AnalysisResult.prototype, "total_points", 2);
__decorateClass([
  (0, import_typeorm12.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
], AnalysisResult.prototype, "created_at", 2);
__decorateClass([
  (0, import_typeorm12.OneToMany)(() => AttentionPoint, (attentionPoint) => attentionPoint.analysisResult)
], AnalysisResult.prototype, "attentionPoints", 2);
AnalysisResult = __decorateClass([
  (0, import_typeorm12.Entity)("analysis_result")
], AnalysisResult);

// src/lib/typeorm/migrations/1721664573842-analysis.ts
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
            "uuid" uuid NOT NULL, 
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
            "uuid" uuid NOT NULL, 
            "name" VARCHAR NOT NULL, 
            "sourceTableId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "source_table" (
            "id" SERIAL PRIMARY KEY, 
            "uuid" uuid NOT NULL, 
            "name" VARCHAR NOT NULL, 
            "sourceId" integer
        )`);
    await queryRunner.query(`CREATE TABLE "source" (
            "id" SERIAL PRIMARY KEY, 
            "uuid" uuid NOT NULL, 
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
    await queryRunner.query(`DROP TABLE "hist_source"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
};

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm13.DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [
    Category,
    Hist,
    User,
    Analysis,
    Source,
    SourceFunction,
    SourceTable,
    SourceTableField,
    Reserv,
    AnalysisResult,
    AttentionPoint,
    Difference
  ],
  migrations: [Analysis1721666809328],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log(`Database with typeorm started at port #${env.DATABASE_PORT}`);
}).catch(() => {
  console.error(`Error connecting to database with typeorm, ${import_console.error}`);
});

// src/repositories/typeorm/source.repository.ts
var SourceRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Source);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findByPrw(name) {
    return this.repository.findOne({ where: { name } });
  }
  async findByUuid(uuid) {
    return this.repository.find({ where: { uuid } });
  }
  async update(name, updates) {
    await this.repository.update({ name }, updates);
  }
  async updateCatgeory(prw, updates) {
    await this.repository.update({ name: prw }, updates);
  }
  async updateReservStatus(name, reserv, dev) {
    await this.repository.update({ name }, { reserv });
  }
  async delete(name) {
    await this.repository.delete({ name });
  }
  async deleteAll() {
    await this.repository.query('TRUNCATE TABLE "source" CASCADE');
  }
  async findByConditions(conditions) {
    console.log(conditions);
    return this.repository.find({ where: conditions });
  }
};

// src/repositories/typeorm/history.repository.ts
var HistRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Hist);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findByFonte(fonte) {
    return this.repository.find({ where: { fonte }, order: { id: "DESC" } });
  }
  async findFontes(search) {
    const query = this.repository.createQueryBuilder("hist").select("fonte").groupBy("fonte").orderBy("fonte", "ASC");
    if (search) {
      query.where("LOWER(hist.fonte) LIKE :search", { search: `%${search.toLowerCase()}%` });
    }
    return query.getRawMany();
  }
};

// src/repositories/typeorm/reserv.repository.ts
var ReservRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Reserv);
  }
  async create(data) {
    await this.repository.save(data);
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findByPrwAndId(prw, id) {
    return this.repository.find({
      where: {
        fonte: prw
      },
      order: {
        createdAt: "DESC"
      }
    });
  }
  async findDistinctByFonte(limit, offset) {
    return this.repository.createQueryBuilder("reserv").distinctOn(["reserv.fonte"]).orderBy("reserv.fonte").addOrderBy("reserv.createdAt", "DESC").limit(limit).offset(offset).getMany();
  }
  async countDistinctFonte() {
    const result = await this.repository.createQueryBuilder("reserv").select("COUNT(DISTINCT reserv.fonte)", "count").getRawOne();
    return parseInt(result.count, 10);
  }
  async update(id, updates) {
    await this.repository.update({ id }, updates);
  }
  async updateSource(fieldsToUpdate, conditions) {
    await this.repository.update(conditions, fieldsToUpdate);
  }
  async deleteById(id) {
    await this.repository.delete({ id });
  }
  async findActiveByDev(dev) {
    return this.repository.find({ where: { dev, data_fim: "" }, select: ["fonte"] });
  }
};

// src/repositories/typeorm/source-function.repository.ts
var SourceFunctionRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(SourceFunction);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findBySource(sourceId) {
    return this.repository.find({ where: { Source: { id: sourceId } } });
  }
  async update(id, updates) {
    await this.repository.update(id, updates);
  }
  async delete(id) {
    await this.repository.delete(id);
  }
};

// src/repositories/typeorm/source-table.repository.ts
var SourceTableRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(SourceTable);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findBySource(sourceId) {
    return this.repository.find({ where: { source: { id: sourceId } } });
  }
  async update(id, updates) {
    await this.repository.update(id, updates);
  }
  async delete(id) {
    await this.repository.delete(id);
  }
};

// src/repositories/typeorm/source-table-field.repository.ts
var SourceTableFieldRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(SourceTableField);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findBySourceTable(sourceTableId) {
    return this.repository.find({ where: { sourceTable: { id: sourceTableId } } });
  }
  async update(id, updates) {
    await this.repository.update(id, updates);
  }
  async delete(id) {
    await this.repository.delete(id);
  }
};

// src/use-cases/source/unzip-source.ts
var fs3 = __toESM(require("fs/promises"));
var pathlib = __toESM(require("path"));

// src/utils/parseFile.ts
var fs2 = __toESM(require("fs/promises"));

// src/utils/file.utils.ts
var fs = __toESM(require("fs/promises"));
function countBlankLines(source) {
  return source.split("\n").filter((line) => line.trim() === "").length;
}
function countCommentedLines(lines) {
  let commentedLinesCount = 0;
  let insideBlockComment = false;
  for (const line of lines) {
    if (insideBlockComment) {
      if (line.includes("*/")) {
        insideBlockComment = false;
        commentedLinesCount++;
        const endIndex = line.indexOf("*/") + 2;
        const remainingLine = line.substring(endIndex);
        if (remainingLine.trim().startsWith("//")) {
          commentedLinesCount++;
        }
      } else {
        commentedLinesCount++;
      }
    } else {
      if (line.includes("//")) {
        commentedLinesCount++;
      } else if (line.includes("/*")) {
        insideBlockComment = true;
        commentedLinesCount++;
        if (line.trim().endsWith("*/")) {
          insideBlockComment = false;
        }
      }
    }
  }
  return commentedLinesCount;
}
async function _isPE(value) {
  const peValues = [];
  if (peValues.length === 0) {
    const file = await fs.open("./values.txt", "r");
    for await (const line of file.readLines()) {
      peValues.push(line);
    }
  }
  for (const v of peValues) {
    const regex = new RegExp(`${v.toUpperCase()}`, "g");
    if (value.toUpperCase().match(regex)) {
      return true;
    }
  }
  return false;
}
function _findUserFunctions(text) {
  const pattern = /\b[uU][sS][eE][rR]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findStaticFunctions(text) {
  const pattern = /\b[sS][tT][aA][tT][iI][cC]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findFunctionClose(text) {
  const pattern = /^\b[rR][eE][tT][uU][rR][nN]\s*\w*\s*/g;
  return text.match(pattern);
}
function _findOpenClass(text) {
  const pattern = /\b[cC][lL][aA][sS][sS]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findClassMethods(text) {
  const pattern = /\b[mM][eE][tT][hH][oO][dD]\s+\w*\s*\(\)/g;
  return text.match(pattern);
}
function _findTables(text) {
  const res = [];
  const pattern = /retsqlname\(["']([^"']+)["']\)/;
  const result = text.toLowerCase().match(pattern);
  if (result) {
    res.push(result[1].toUpperCase());
  }
  const pattern2 = /setalias\(["']([^"']+)["']\)/;
  const result2 = text.toLowerCase().match(pattern2);
  if (result2) {
    res.push(result2[1].toUpperCase());
  }
  const pattern3 = /dbselectarea\(["']([^"']+)["']\)/;
  const result3 = text.toLowerCase().match(pattern3);
  if (result3) {
    res.push(result3[1].toUpperCase());
  }
  return res.filter((item, index) => res.indexOf(item) === index);
}
function _findFields(program, text) {
  if (program && program.tables) {
    for (const t of program.tables) {
      const pattern2 = new RegExp(`${t.name.toLowerCase()}_\\w*`, "g");
      const result2 = text.toLowerCase().match(pattern2);
      if (result2) {
        for (const r of result2) {
          t.fields.push(r.toUpperCase());
        }
      } else {
        const pattern = new RegExp(
          `${t.name.substring(1).toLowerCase()}_\\w*`,
          "g"
        );
        const result = text.toLowerCase().match(pattern);
        if (result) {
          for (const r of result) {
            t.fields.push(r.toUpperCase());
          }
        }
      }
      t.fields = t.fields.filter((item, index) => t.fields.indexOf(item) === index);
    }
  }
}

// src/repositories/typeorm/category.repository.ts
var CategoryRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Category);
  }
  async create(category, content) {
    await this.repository.save({ category, content });
  }
  async findAll() {
    return this.repository.find();
  }
  async findById(id) {
    return this.repository.findOne({ where: { category: id } });
  }
  async update(id, updates) {
    await this.repository.update({ category: id }, updates);
  }
  async delete(id) {
    await this.repository.delete({ category: id });
  }
};

// src/utils/parseFile.ts
async function parseFile(path) {
  let category = "N\xC3O CATEGORIZADO";
  const lines = [];
  const program = {
    category,
    functions: [],
    tables: [],
    source: "",
    blankLines: 0,
    commentedLines: 0
  };
  const categoryRepository = new CategoryRepository();
  try {
    const file = await fs2.open(path, "r");
    for await (const line of file.readLines()) {
      lines.push(line);
    }
    program.source = lines.join("\n");
    program.blankLines = countBlankLines(program.source);
    program.commentedLines = countCommentedLines(lines);
    const categories = await categoryRepository.findAll();
    const relevantCategories = categories.filter(
      (cat) => cat.category !== "PONTO DE ENTRADA" && cat.category !== "CLASSES"
    );
    if (lines.length > 0) {
      const firstLine = lines[0].toLowerCase();
      const match = firstLine.match(/categoria:\s*(.*)/i);
      if (match) {
        program.category = match[1].trim().toUpperCase();
      } else {
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].toLowerCase();
          for (const category2 of relevantCategories) {
            const expressions = category2.content.split(";");
            if (expressions.some((exp) => line.match(exp))) {
              program.category = category2.category;
              break;
            }
          }
          const tablesFound = _findTables(line);
          if (tablesFound) {
            for (const t of tablesFound.filter((item, index) => tablesFound.indexOf(item) === index)) {
              program.tables.push({ name: t, fields: [] });
            }
          }
          let fn = _findUserFunctions(line);
          if (fn) {
            const isPE = await _isPE(line);
            if (isPE) {
              program.category = "PONTO DE ENTRADA";
            }
            const f = { type: "User", name: fn[0], body: [] };
            for (let j = i; j < lines.length; j++) {
              const line2 = lines[j];
              if (_findFunctionClose(line2)) {
                f.body = lines.slice(i, j + 1);
                program.functions.push(f);
                break;
              }
            }
          }
          fn = _findStaticFunctions(line);
          if (fn) {
            const f = { type: "Static", name: fn[0], body: [] };
            for (let j = i; j < lines.length; j++) {
              const line2 = lines[j];
              if (_findFunctionClose(line2)) {
                f.body = lines.slice(i, j + 1);
                program.functions.push(f);
                break;
              }
            }
          }
          if (_findOpenClass(line)) {
            program.category = "CLASSES";
            fn = _findClassMethods(line);
            if (fn) {
              const f = { type: "Method", name: fn[0], body: [] };
              for (let j = i, len = lines.length; j < len; j++) {
                const line2 = lines[j];
                if (_findFunctionClose(line2)) {
                  f.body = lines.slice(i, j + 1);
                  program.functions.push(f);
                  break;
                }
              }
            }
          }
          _findFields(program, line);
        }
      }
    }
    return program;
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
}

// src/use-cases/source/unzip-source.ts
var chardet = __toESM(require("chardet"));
var iconv = __toESM(require("iconv-lite"));
var UnzipSourceUseCase = class {
  constructor(sourceRepository, histRepository, reservRepository, sourceFunctionRepository, sourceTableRepository, sourceTableFieldRepository) {
    this.sourceRepository = sourceRepository;
    this.histRepository = histRepository;
    this.reservRepository = reservRepository;
    this.sourceFunctionRepository = sourceFunctionRepository;
    this.sourceTableRepository = sourceTableRepository;
    this.sourceTableFieldRepository = sourceTableFieldRepository;
  }
  async handler(uid, filePath, user, commit) {
    const unzipper = require("unzipper");
    const readStream = await fs3.readFile(filePath);
    const entries = await unzipper.Open.buffer(readStream);
    for (const entry of entries.files) {
      const fileName = pathlib.basename(entry.path);
      const fileExt = pathlib.extname(entry.path).toLowerCase();
      if ([".prw", ".prx", ".tlpp"].includes(fileExt)) {
        const contentBuffer = await entry.buffer();
        const detectedEncoding = chardet.detect(contentBuffer) || "UTF-8";
        const content = iconv.decode(contentBuffer, detectedEncoding);
        const utf8Buffer = Buffer.from(content, "utf-8");
        console.log(utf8Buffer);
        await fs3.mkdir("tmp/", { recursive: true });
        const outfile = `tmp/${fileName}_${uid}.dat`;
        await fs3.writeFile(outfile, utf8Buffer);
        try {
          const result = await parseFile(outfile);
          const existingSource = await this.sourceRepository.findByPrw(fileName);
          if (existingSource && existingSource.category !== result.category) {
            console.log(`${fileName} : ${existingSource.category} => ${result.category}`);
          }
          if (existingSource) {
            const sourceOldHist = existingSource.source;
            await this.sourceRepository.delete(fileName);
            await this.histRepository.create({
              fonte: fileName,
              user,
              action: "UPDATE",
              source: result.source,
              commit,
              sourceOld: sourceOldHist
            });
          } else {
            await this.histRepository.create({
              fonte: fileName,
              user,
              action: "CREATE",
              source: result.source,
              commit
            });
          }
          const lines = (result.source ?? "").split("\n");
          const blankLinesCount = countBlankLines(result.source ?? "");
          const commentedLinesCount = countCommentedLines(lines);
          const s = await this.sourceRepository.create({
            uuid: uid,
            label: "Documenta\xE7\xE3o",
            category: result.category,
            name: fileName,
            reserv: false,
            tables: result.tables.length,
            functions: result.functions.length,
            source: result.source,
            line: lines.length ?? 0,
            // Conta o número total de linhas
            blankLines: blankLinesCount,
            // Conta o número de linhas em branco
            commentedLines: commentedLinesCount
            // Conta o número de linhas comentadas
          });
          const currentDate = /* @__PURE__ */ new Date();
          const dataFim = currentDate.toLocaleDateString("pt-BR");
          const horaFim = currentDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
          await this.reservRepository.updateSource(
            { source_dev: result.source, data_fim: dataFim, hora_fim: horaFim },
            { fonte: fileName, data_fim: "" }
          );
          for (const f of result.functions) {
            await this.sourceFunctionRepository.create({
              uuid: uid,
              type: f.type,
              name: f.name,
              source: f.body.join("\n"),
              line: lines.length ?? 0,
              // Conta o número total de linhas
              blankLines: blankLinesCount,
              // Conta o número de linhas em branco
              commentedLines: commentedLinesCount,
              // Conta o número de linhas comentadas
              Source: s
              // Aqui estamos referenciando a entidade Source 
            });
          }
          for (const table of result.tables) {
            const t = await this.sourceTableRepository.create({
              uuid: uid,
              name: table.name,
              source: s
              // Aqui estamos referenciando a entidade Source criada anteriormente
            });
            for (const field of table.fields) {
              await this.sourceTableFieldRepository.create({
                uuid: uid,
                name: field,
                sourceTable: t
                // Aqui estamos referenciando a entidade SourceTable criada anteriormente
              });
            }
          }
        } catch (error2) {
          console.error(`Erro ao processar o arquivo ${fileName}:`, error2);
        }
      }
    }
    console.log("Processamento finalizado");
  }
};

// src/use-cases/factory/source/make-unzip-source-use-case.ts
function makeUnzipSourceUseCase() {
  const sourceRepository = new SourceRepository();
  const histRepository = new HistRepository();
  const reservRepository = new ReservRepository();
  const sourceFunctionRepository = new SourceFunctionRepository();
  const sourceTableRepository = new SourceTableRepository();
  const sourceTableFieldRepository = new SourceTableFieldRepository();
  return new UnzipSourceUseCase(
    sourceRepository,
    histRepository,
    reservRepository,
    sourceFunctionRepository,
    sourceTableRepository,
    sourceTableFieldRepository
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeUnzipSourceUseCase
});