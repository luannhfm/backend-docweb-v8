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

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_reflect_metadata = require("reflect-metadata");
var import_fastify = __toESM(require("fastify"));

// src/http/controllers/category/create.ts
var import_zod2 = require("zod");

// src/entities/category.entity.ts
var import_typeorm = require("typeorm");
var Category = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryColumn)("varchar")
], Category.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Category.prototype, "content", 2);
Category = __decorateClass([
  (0, import_typeorm.Entity)("category")
], Category);

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

// src/entities/history.entity.ts
var import_typeorm2 = require("typeorm");
var Hist = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)()
], Hist.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Hist.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Hist.prototype, "user", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Hist.prototype, "action", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Hist.prototype, "commit", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Hist.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", { nullable: true })
], Hist.prototype, "sourceOld", 2);
__decorateClass([
  (0, import_typeorm2.Column)("timestamp", { default: () => "CURRENT_TIMESTAMP" })
], Hist.prototype, "createdAt", 2);
Hist = __decorateClass([
  (0, import_typeorm2.Entity)("hist_source")
], Hist);

// src/entities/user.entity.ts
var import_typeorm3 = require("typeorm");
var User = class {
  // Adicionando o campo 'admin'
};
__decorateClass([
  (0, import_typeorm3.PrimaryColumn)({ type: "varchar" })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "varchar" })
], User.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "varchar" })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "varchar" })
], User.prototype, "senha", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "varchar" })
], User.prototype, "group", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "boolean" })
], User.prototype, "admin", 2);
User = __decorateClass([
  (0, import_typeorm3.Entity)("users")
], User);

// src/entities/analysis.entity.ts
var import_typeorm4 = require("typeorm");
var Analysis = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryColumn)({ type: "varchar" })
], Analysis.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "json" })
], Analysis.prototype, "analysis", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "varchar" })
], Analysis.prototype, "status", 2);
Analysis = __decorateClass([
  (0, import_typeorm4.Entity)("analysis")
], Analysis);

// src/entities/source.entity.ts
var import_typeorm8 = require("typeorm");

// src/entities/source-function.entity.ts
var import_typeorm5 = require("typeorm");
var SourceFunction = class {
};
__decorateClass([
  (0, import_typeorm5.PrimaryGeneratedColumn)()
], SourceFunction.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm5.Column)("varchar")
], SourceFunction.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm5.Column)("varchar")
], SourceFunction.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm5.Column)("text")
], SourceFunction.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm5.Column)("int")
], SourceFunction.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm5.Column)("int")
], SourceFunction.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm5.Column)("int")
], SourceFunction.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm5.ManyToOne)(() => Source, (source) => source.Functions, { onDelete: "CASCADE" })
], SourceFunction.prototype, "Source", 2);
SourceFunction = __decorateClass([
  (0, import_typeorm5.Entity)("source_function")
], SourceFunction);

// src/entities/source-table.entity.ts
var import_typeorm7 = require("typeorm");

// src/entities/source-table-field.entity.ts
var import_typeorm6 = require("typeorm");
var SourceTableField = class {
};
__decorateClass([
  (0, import_typeorm6.PrimaryGeneratedColumn)()
], SourceTableField.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm6.Column)("varchar")
], SourceTableField.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm6.ManyToOne)(() => SourceTable, (sourceTable) => sourceTable.fields, { onDelete: "CASCADE" })
], SourceTableField.prototype, "sourceTable", 2);
SourceTableField = __decorateClass([
  (0, import_typeorm6.Entity)("source_table_field")
], SourceTableField);

// src/entities/source-table.entity.ts
var SourceTable = class {
};
__decorateClass([
  (0, import_typeorm7.PrimaryGeneratedColumn)()
], SourceTable.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm7.Column)("varchar")
], SourceTable.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm7.ManyToOne)(() => Source, (source) => source.Tables, { onDelete: "CASCADE" })
], SourceTable.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm7.OneToMany)(() => SourceTableField, (sourceTableField) => sourceTableField.sourceTable)
], SourceTable.prototype, "fields", 2);
SourceTable = __decorateClass([
  (0, import_typeorm7.Entity)("source_table")
], SourceTable);

// src/entities/source.entity.ts
var Source = class {
};
__decorateClass([
  (0, import_typeorm8.PrimaryGeneratedColumn)()
], Source.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm8.Column)("varchar")
], Source.prototype, "label", 2);
__decorateClass([
  (0, import_typeorm8.Column)("varchar")
], Source.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm8.Column)("varchar")
], Source.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm8.Column)("int")
], Source.prototype, "tables", 2);
__decorateClass([
  (0, import_typeorm8.Column)("int")
], Source.prototype, "functions", 2);
__decorateClass([
  (0, import_typeorm8.Column)("text")
], Source.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm8.Column)("int")
], Source.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm8.Column)("int")
], Source.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm8.Column)("int")
], Source.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm8.Column)("smallint", { default: 0 })
], Source.prototype, "status", 2);
__decorateClass([
  (0, import_typeorm8.Column)("boolean")
], Source.prototype, "reserv", 2);
__decorateClass([
  (0, import_typeorm8.OneToMany)(() => SourceFunction, (sourceFunction) => sourceFunction.Source)
], Source.prototype, "Functions", 2);
__decorateClass([
  (0, import_typeorm8.OneToMany)(() => SourceTable, (sourceTable) => sourceTable.source)
], Source.prototype, "Tables", 2);
Source = __decorateClass([
  (0, import_typeorm8.Entity)("source")
], Source);

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
  (0, import_typeorm11.OneToMany)(() => Difference, (difference) => difference.attentionPoint, {
    cascade: true,
    // Adiciona esta linha
    onDelete: "CASCADE"
    // Adiciona esta linha
  })
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
  (0, import_typeorm12.OneToMany)(() => AttentionPoint, (attentionPoint) => attentionPoint.analysisResult, {
    cascade: true,
    // Adiciona esta linha
    onDelete: "CASCADE"
    // Adiciona esta linha
  })
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
            "sourceOld" text,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now() 

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

// src/use-cases/category/create-category.ts
var CreateCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler({ category, content }) {
    const existingCategory = await this.categoryRepository.findById(category);
    if (existingCategory) {
    }
    await this.categoryRepository.create(category, content);
  }
};

// src/use-cases/factory/category/make-create-category-use-case.ts
function makeCreateCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new CreateCategoryUseCase(categoryRepository);
}

// src/http/controllers/category/create.ts
async function createCategory(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    category: import_zod2.z.string(),
    content: import_zod2.z.string()
  });
  const { category, content } = registerBodySchema.parse(request.body);
  const createCategoryUseCase = makeCreateCategoryUseCase();
  await createCategoryUseCase.handler({ category, content });
  reply.code(201).send({ message: "Categoria criada com sucesso." });
}

// src/use-cases/category/get-all-categories.ts
var GetAllCategoriesUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler() {
    return this.categoryRepository.findAll();
  }
};

// src/use-cases/factory/category/make-get-all-categories-use-case.ts
function makeGetAllCategoriesUseCase() {
  const categoryRepository = new CategoryRepository();
  return new GetAllCategoriesUseCase(categoryRepository);
}

// src/http/controllers/category/getAll.ts
async function getAllCategories(request, reply) {
  const getAllCategoriesUseCase = makeGetAllCategoriesUseCase();
  const categories = await getAllCategoriesUseCase.handler();
  reply.send({ items: categories });
}

// src/use-cases/category/delete-category.ts
var DeleteCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler(id) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria n\xE3o encontrada.");
    }
    await this.categoryRepository.delete(id);
  }
};

// src/use-cases/factory/category/make-delete-category-use-case.ts
function makeDeleteCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new DeleteCategoryUseCase(categoryRepository);
}

// src/http/controllers/category/delete.ts
var import_zod3 = require("zod");
async function deleteCategory(request, reply) {
  const paramsSchema = import_zod3.z.object({
    id: import_zod3.z.string()
  });
  const { id } = paramsSchema.parse(request.params);
  const deleteCategoryUseCase = makeDeleteCategoryUseCase();
  await deleteCategoryUseCase.handler(id);
  reply.code(200).send({ message: "Categoria deletada com sucesso." });
}

// src/use-cases/category/update-category.ts
var UpdateCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler(id, updates) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria n\xE3o encontrada.");
    }
    await this.categoryRepository.update(id, updates);
  }
};

// src/use-cases/factory/category/make-update-category-use-case.ts
function makeUpdateCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new UpdateCategoryUseCase(categoryRepository);
}

// src/http/controllers/category/update.ts
var import_zod4 = require("zod");
async function updateCategory(request, reply) {
  const paramsSchema = import_zod4.z.object({
    id: import_zod4.z.string()
  });
  const bodySchema = import_zod4.z.object({
    content: import_zod4.z.string().optional()
  });
  const { id } = paramsSchema.parse(request.params);
  const { content } = bodySchema.parse(request.body);
  const updateCategoryUseCase = makeUpdateCategoryUseCase();
  await updateCategoryUseCase.handler(id, { content });
  reply.send({ message: "Categoria atualizada com sucesso." });
}

// src/http/controllers/category/route.ts
async function categoryRoutes(app2) {
  app2.post("/category", createCategory);
  app2.get("/category", getAllCategories);
  app2.delete("/category/:id", deleteCategory);
  app2.post("/category/:id", updateCategory);
}

// src/http/controllers/history/getHistBySource.ts
var import_zod5 = require("zod");

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

// src/use-cases/history/get-hist-by-source.ts
var GetHistByFonteUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(fonte) {
    return this.histRepository.findByFonte(fonte);
  }
};

// src/use-cases/factory/history/make-get-hist-by-source-use-case.ts
function makeGetHistByFonteUseCase() {
  const histRepository = new HistRepository();
  return new GetHistByFonteUseCase(histRepository);
}

// src/http/controllers/history/getHistBySource.ts
async function getHistByFonte(request, reply) {
  const paramsSchema = import_zod5.z.object({
    prw: import_zod5.z.string()
  });
  const { prw } = paramsSchema.parse(request.params);
  const getHistByFonteUseCase = makeGetHistByFonteUseCase();
  const hist = await getHistByFonteUseCase.handler(prw);
  reply.send({ items: hist });
}

// src/http/controllers/history/getAll.ts
var import_zod6 = require("zod");

// src/use-cases/history/get-all-hist.ts
var GetFontesUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(search) {
    return this.histRepository.findFontes(search);
  }
};

// src/use-cases/factory/history/make-get-all-hist-case.ts
function makeGetFontesUseCase() {
  const histRepository = new HistRepository();
  return new GetFontesUseCase(histRepository);
}

// src/http/controllers/history/getAll.ts
async function getFontes(request, reply) {
  const querySchema = import_zod6.z.object({
    search: import_zod6.z.string().optional()
  });
  const { search } = querySchema.parse(request.query);
  const getFontesUseCase = makeGetFontesUseCase();
  const fontes = await getFontesUseCase.handler(search);
  reply.send({ items: fontes });
}

// src/http/controllers/history/route.ts
async function histRoutes(app2) {
  app2.get("/hist/:prw", getHistByFonte);
  app2.get("/hist", getFontes);
}

// src/http/controllers/user/login.ts
var import_zod7 = require("zod");

// src/repositories/typeorm/user.repository.ts
var UserRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(User);
  }
  async findByLogin(login2) {
    const user = await this.repository.findOne({ where: { id: login2 } });
    return user || void 0;
  }
  async createUser(user) {
    return this.repository.save(user);
  }
  async findAllUsers() {
    return this.repository.find({ order: { id: "ASC" } });
  }
  async deleteUser(id) {
    await this.repository.delete({ id });
  }
  async updateUser(id, updates) {
    await this.repository.update({ id }, updates);
    return this.repository.findOne({ where: { id } });
  }
};

// src/use-cases/errors/invalid-credentials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Invalid credentials");
    this.name = "InvalidCredentialsError";
  }
};

// src/use-cases/user/login.ts
var bcrypt2 = __toESM(require("bcryptjs"));
var LoginUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(login2, password) {
    const user = await this.userRepository.findByLogin(login2);
    if (!user) {
      throw new InvalidCredentialsError();
    }
    const isValid = await bcrypt2.compare(password, user.senha);
    if (!isValid) {
      throw new InvalidCredentialsError();
    }
    return { login: login2, admin: user.admin };
  }
};

// src/use-cases/factory/user/make-login-use-case.ts
function makeLoginUseCase() {
  const userRepository = new UserRepository();
  return new LoginUseCase(userRepository);
}

// src/http/controllers/user/login.ts
async function login(request, reply) {
  const loginBodySchema = import_zod7.z.object({
    login: import_zod7.z.string(),
    password: import_zod7.z.string()
  });
  const { login: login2, password } = loginBodySchema.parse(request.body);
  const loginUseCase = makeLoginUseCase();
  try {
    const result = await loginUseCase.handler(login2, password);
    const token = await reply.jwtSign({ login: login2 });
    console.log("Token gerado:", token);
    reply.status(200).send({ ...result, token });
  } catch (error2) {
    if (error2 instanceof InvalidCredentialsError) {
      console.error("Credenciais inv\xE1lidas:", error2.message);
      reply.status(401).send({ message: error2.message });
    } else {
      console.error("Erro no login:", error2);
      reply.status(500).send({ message: "Internal Server Error" });
    }
  }
}

// src/http/controllers/user/createUser.ts
var import_zod8 = require("zod");

// src/use-cases/user/create-user.ts
var CreateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(user) {
    return this.userRepository.createUser(user);
  }
};

// src/use-cases/factory/user/make-create-user-use-case.ts
function makeCreateUserUseCase() {
  const userRepository = new UserRepository();
  return new CreateUserUseCase(userRepository);
}

// src/http/controllers/user/createUser.ts
async function createUser(request, reply) {
  const createUserBodySchema = import_zod8.z.object({
    id: import_zod8.z.string(),
    nome: import_zod8.z.string(),
    email: import_zod8.z.string(),
    secretkey: import_zod8.z.string(),
    group: import_zod8.z.string(),
    admin: import_zod8.z.boolean()
  });
  const { id, nome, email, secretkey, group, admin } = createUserBodySchema.parse(request.body);
  const createUserUseCase = makeCreateUserUseCase();
  try {
    const newUser = await createUserUseCase.handler({
      id,
      nome,
      email,
      senha: secretkey,
      group,
      admin
    });
    reply.status(201).send({ message: "Usu\xE1rio criado com sucesso.", user: newUser });
  } catch (error2) {
    reply.status(500).send({ message: "Erro ao criar usu\xE1rio.", error: error2 });
  }
}

// src/use-cases/user/get-all-users.ts
var GetAllUsersUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler() {
    return this.userRepository.findAllUsers();
  }
};

// src/use-cases/factory/user/make-get-all-users-use-case.ts
function makeGetAllUsersUseCase() {
  const userRepository = new UserRepository();
  return new GetAllUsersUseCase(userRepository);
}

// src/http/controllers/user/getAllUsers.ts
async function getAllUsers(request, reply) {
  const getAllUsersUseCase = makeGetAllUsersUseCase();
  try {
    const users = await getAllUsersUseCase.handler();
    reply.send({ items: users });
  } catch (error2) {
    reply.status(500).send({ message: "Erro ao buscar usu\xE1rios.", error: error2 });
  }
}

// src/http/controllers/user/deleteUser.ts
var import_zod9 = require("zod");

// src/use-cases/user/delete-user.ts
var DeleteUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(id) {
    await this.userRepository.deleteUser(id);
  }
};

// src/use-cases/factory/user/make-delete-user-use-case.ts
function makeDeleteUserUseCase() {
  const userRepository = new UserRepository();
  return new DeleteUserUseCase(userRepository);
}

// src/http/controllers/user/deleteUser.ts
async function deleteUser(request, reply) {
  const paramsSchema = import_zod9.z.object({
    id: import_zod9.z.string()
  });
  const { id } = paramsSchema.parse(request.params);
  const deleteUserUseCase = makeDeleteUserUseCase();
  try {
    await deleteUserUseCase.handler(id);
    reply.send({ message: "Usu\xE1rio deletado com sucesso." });
  } catch (error2) {
    reply.status(500).send({ message: "Erro ao deletar usu\xE1rio.", error: error2 });
  }
}

// src/http/controllers/user/updateUser.ts
var import_zod10 = require("zod");

// src/use-cases/user/update-user.ts
var bcrypt3 = __toESM(require("bcryptjs"));
var UpdateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(id, updates) {
    if (updates.secretkey) {
      updates.senha = await bcrypt3.hash(updates.secretkey, 10);
      delete updates.secretkey;
    }
    const updatedUser = await this.userRepository.updateUser(id, updates);
    if (!updatedUser) {
      throw new Error("Usu\xE1rio n\xE3o encontrado");
    }
    return updatedUser;
  }
};

// src/use-cases/factory/user/make-update-user-use-case.ts
function makeUpdateUserUseCase() {
  const userRepository = new UserRepository();
  return new UpdateUserUseCase(userRepository);
}

// src/http/controllers/user/updateUser.ts
async function updateUser(request, reply) {
  const paramsSchema = import_zod10.z.object({
    id: import_zod10.z.string()
  });
  const bodySchema = import_zod10.z.object({
    nome: import_zod10.z.string().optional(),
    email: import_zod10.z.string().optional(),
    secretkey: import_zod10.z.string().optional()
  });
  const { id } = paramsSchema.parse(request.params);
  const updates = bodySchema.parse(request.body);
  const updateUserUseCase = makeUpdateUserUseCase();
  try {
    const updatedUser = await updateUserUseCase.handler(id, updates);
    if (!updatedUser) {
      return reply.status(404).send({ message: "Usu\xE1rio n\xE3o encontrado." });
    }
    reply.send({ message: "Usu\xE1rio atualizado com sucesso.", user: updatedUser });
  } catch (error2) {
    console.error("Erro ao atualizar usu\xE1rio:", error2);
    reply.status(500).send({ message: "Erro ao atualizar usu\xE1rio.", error: error2 });
  }
}

// src/http/controllers/user/routes.ts
async function userRoutes(app2) {
  app2.post("/login", login);
  app2.post("/users", createUser);
  app2.get("/users", getAllUsers);
  app2.delete("/users/:id", deleteUser);
  app2.post("/users/:id", updateUser);
}

// src/http/controllers/analysis/route.ts
var import_fastify_multer = __toESM(require("fastify-multer"));

// src/repositories/typeorm/analysis.repository.ts
var AnalysisRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Analysis);
  }
  async updateAnalysisStatus(id_analysis, analysis) {
    try {
      await this.repository.update({ id_analysis }, { status: "conclu\xEDdo", analysis });
    } catch (error2) {
      console.error("Erro ao atualizar a an\xE1lise:", error2);
      throw error2;
    }
  }
  async findAndCount(page, pageSize) {
    const [results, total] = await this.repository.findAndCount({
      order: { id_analysis: "DESC" },
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    return [results, total];
  }
  async findById(id) {
    return this.repository.findOne({ where: { id_analysis: id } });
  }
  async createAnalysis(analysis) {
    return this.repository.save(analysis);
  }
  async deleteAnalysis(id) {
    await this.repository.delete({ id_analysis: id });
  }
};

// src/use-cases/analysis/update-analysis-status.ts
var UpdateAnalysisStatusUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(analysisId, jsonAnalysis2) {
    await this.analysisRepository.updateAnalysisStatus(analysisId, jsonAnalysis2);
  }
};

// src/use-cases/factory/analysis/make-update-analysis-status-use-case.ts
function makeUpdateAnalysisStatusUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new UpdateAnalysisStatusUseCase(analysisRepository);
}

// src/http/controllers/analysis/upload.ts
var readline = __toESM(require("readline"));

// src/utils/stream.utils.ts
var import_stream = require("stream");
async function bufferToStream(buffer) {
  const stream = new import_stream.PassThrough();
  stream.end(buffer);
  return stream;
}
async function getKeyColumnIndices(prefix) {
  switch (prefix) {
    case "SIX":
    case "SX6":
    case "SX7":
    case "SX9":
    case "SXA":
      return [0, 1];
    case "SX1":
    case "SX2":
    case "SXG":
      return [0];
    case "SX3":
      return [2];
    case "SX5":
      return [0, 1, 2];
    default:
      return [0];
  }
}
async function createCompositeKey(header, columns, keyColumnIndices) {
  const keyParts = keyColumnIndices.map((index) => {
    const columnName = header[index] || `Coluna ${index + 1}`;
    const columnValue = columns[index].trim();
    if (columnValue) {
      return `${columnName}:${columnValue}`;
    }
    return null;
  }).filter((part) => part !== null);
  return keyParts.join(" | ");
}

// src/http/controllers/analysis/upload.ts
var jsonAnalysis = {};
var seq = 1;
async function compareCsvFiles(file1, file2, uploadsData, seq2) {
  const stream1 = await bufferToStream(file1.buffer);
  const stream2 = await bufferToStream(file2.buffer);
  const reader1 = readline.createInterface({ input: stream1 });
  const reader2 = readline.createInterface({ input: stream2 });
  const iterator1 = reader1[Symbol.asyncIterator]();
  const iterator2 = reader2[Symbol.asyncIterator]();
  try {
    let header1 = (await iterator1.next()).value.split(";");
    let header2 = (await iterator2.next()).value.split(";");
    let line1 = await iterator1.next();
    let line2 = await iterator2.next();
    while (!line1.done && !line2.done) {
      const columns1 = line1.value.split(";");
      const columns2 = line2.value.split(";");
      const prefix = file1.originalname.substring(0, 3).toUpperCase();
      const keyColumnIndices = await getKeyColumnIndices(prefix);
      const compositeKey = await createCompositeKey(header1, columns1, keyColumnIndices);
      columns1.forEach((col, index) => {
        if (columns2[index] && col.trim() !== columns2[index].trim()) {
          const columnName = header1[index] || `Coluna ${index + 1}`;
          if (!jsonAnalysis[prefix]) {
            jsonAnalysis[prefix] = [];
          }
          jsonAnalysis[prefix].push({
            instalacao: uploadsData[0].name.toUpperCase(),
            tabela: file1.originalname.substring(0, 6).toUpperCase(),
            dif: `${columnName}: ${col.trim()}`,
            sequencia: seq2,
            isOk: false,
            chave: compositeKey
            // Corrigido aqui
          });
          jsonAnalysis[prefix].push({
            instalacao: uploadsData[1].name.toUpperCase(),
            tabela: file2.originalname.substring(0, 6).toUpperCase(),
            dif: `${columnName}: ${columns2[index].trim()}`,
            sequencia: seq2,
            isOk: false,
            chave: compositeKey
            // Corrigido aqui
          });
          seq2++;
        }
      });
      line1 = await iterator1.next();
      line2 = await iterator2.next();
    }
  } catch (err) {
    console.error("Erro ao processar os arquivos:", err);
  } finally {
    reader1.close();
    reader2.close();
  }
}
async function uploadFilesHandler(request, reply) {
  const files = request.files;
  const uploadsData = JSON.parse(request.body.uploadsData);
  const analysisId = request.body.analysisId;
  try {
    const filesByPrefixAndField = {};
    Object.entries(files).forEach(([field, filesArray]) => {
      filesArray.forEach((file) => {
        const prefix = file.originalname.substring(0, 3);
        if (!filesByPrefixAndField[prefix]) {
          filesByPrefixAndField[prefix] = {};
        }
        if (!filesByPrefixAndField[prefix][field]) {
          filesByPrefixAndField[prefix][field] = [];
        }
        filesByPrefixAndField[prefix][field].push(file);
      });
    });
    for (const [prefix, groupedFiles] of Object.entries(filesByPrefixAndField)) {
      const fields = Object.keys(groupedFiles);
      if (fields.length > 1 && groupedFiles[fields[0]].length && groupedFiles[fields[1]].length) {
        for (const file1 of groupedFiles[fields[0]]) {
          for (const file2 of groupedFiles[fields[1]]) {
            console.log(`Comparando ${file1.originalname} com ${file2.originalname}`);
            await compareCsvFiles(file1, file2, uploadsData, seq);
            seq = 1;
          }
        }
      }
    }
    await makeUpdateAnalysisStatusUseCase().handler(analysisId, jsonAnalysis);
    reply.send("Arquivos recebidos e processados.");
  } catch (error2) {
    console.error("Erro durante a an\xE1lise:", error2);
    if (!reply.sent) {
      reply.status(500).send("Erro ao processar os arquivos.");
    }
  }
}

// src/http/controllers/analysis/getAll.ts
var import_zod11 = require("zod");

// src/use-cases/analysis/get-all-analysis.ts
var GetHistUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(page, pageSize) {
    const [data, count] = await this.analysisRepository.findAndCount(page, pageSize);
    const hasNext = (page - 1) * pageSize + data.length < count;
    return { data, page, pageSize, hasNext };
  }
};

// src/use-cases/factory/analysis/make-get-all-use-case.ts
function makeGetHistUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new GetHistUseCase(analysisRepository);
}

// src/http/controllers/analysis/getAll.ts
async function getHistHandler(request, reply) {
  const querySchema = import_zod11.z.object({
    page: import_zod11.z.string().optional(),
    pageSize: import_zod11.z.string().optional()
  });
  const { page, pageSize } = querySchema.parse(request.query);
  const pageNumber = parseInt(page || "1", 10);
  const pageSizeNumber = parseInt(pageSize || "10", 10);
  if (pageNumber <= 0 || pageSizeNumber <= 0) {
    return reply.status(400).send({ error: "Par\xE2metros page e pageSize devem ser maiores que zero." });
  }
  const getHistUseCase = makeGetHistUseCase();
  try {
    const result = await getHistUseCase.handler(pageNumber, pageSizeNumber);
    reply.status(200).send(result);
  } catch (error2) {
    console.error("Erro ao realizar consulta na tabela de hist\xF3rico:", error2);
    reply.status(500).send("Erro ao realizar consulta na tabela de hist\xF3rico.");
  }
}

// src/http/controllers/analysis/returnAnalysis.ts
var import_zod12 = require("zod");

// src/use-cases/analysis/return-analysis.ts
var ReturnAnalysisUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(id) {
    const analysis = await this.analysisRepository.findById(id);
    if (!analysis) {
      throw new Error("An\xE1lise n\xE3o encontrada");
    }
    return analysis.analysis;
  }
};

// src/use-cases/factory/analysis/make-return-analysis-use-case.ts
function makeReturnAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new ReturnAnalysisUseCase(analysisRepository);
}

// src/http/controllers/analysis/returnAnalysis.ts
async function returnAnalysisHandler(request, reply) {
  const querySchema = import_zod12.z.object({
    id: import_zod12.z.string()
  });
  const { id } = querySchema.parse(request.query);
  const returnAnalysisUseCase = makeReturnAnalysisUseCase();
  try {
    const analysis = await returnAnalysisUseCase.handler(id);
    reply.status(200).send(analysis);
  } catch (error2) {
    console.error("Erro ao buscar a an\xE1lise:", error2);
    reply.status(500).send("Erro ao buscar a an\xE1lise.");
  }
}

// src/http/controllers/analysis/deleteAnalysis.ts
var import_zod13 = require("zod");

// src/use-cases/analysis/delete-analysis.ts
var DeleteAnalysisUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(id) {
    const analysis = await this.analysisRepository.findById(id);
    if (!analysis) {
      throw new Error("An\xE1lise n\xE3o encontrada");
    }
    await this.analysisRepository.deleteAnalysis(id);
  }
};

// src/use-cases/factory/analysis/make-delete-analysis-use-case.ts
function makeDeleteAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new DeleteAnalysisUseCase(analysisRepository);
}

// src/http/controllers/analysis/deleteAnalysis.ts
async function deleteAnalysisHandler(request, reply) {
  const querySchema = import_zod13.z.object({
    id: import_zod13.z.string()
  });
  const { id } = querySchema.parse(request.query);
  const deleteAnalysisUseCase = makeDeleteAnalysisUseCase();
  try {
    await deleteAnalysisUseCase.handler(id);
    reply.status(200).send({ message: "An\xE1lise deletada com sucesso." });
  } catch (error2) {
    console.error("Erro ao deletar a an\xE1lise:", error2);
    reply.status(500).send("Erro ao deletar a an\xE1lise.");
  }
}

// src/http/controllers/analysis/createAnalysis.ts
var import_zod14 = require("zod");

// src/use-cases/analysis/create-analysis.ts
var CreateAnalysisUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(analysisId, jsonAnalysis2) {
    const newAnalysis = {
      id_analysis: analysisId,
      analysis: jsonAnalysis2,
      status: "processando"
    };
    await this.analysisRepository.createAnalysis(newAnalysis);
  }
};

// src/use-cases/factory/analysis/make-create-analysis-use-case.ts
function makeCreateAnalysisUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new CreateAnalysisUseCase(analysisRepository);
}

// src/http/controllers/analysis/createAnalysis.ts
async function createAnalysisHandler(request, reply) {
  const bodySchema = import_zod14.z.object({
    id: import_zod14.z.string()
  });
  const { id } = bodySchema.parse(request.body);
  const jsonAnalysis2 = {};
  const createAnalysisUseCase = makeCreateAnalysisUseCase();
  try {
    await createAnalysisUseCase.handler(id, jsonAnalysis2);
    reply.status(201).send({ message: "Processando dicion\xE1rios." });
  } catch (error2) {
    console.error("Erro ao salvar a an\xE1lise:", error2);
    reply.status(500).send({ message: "Erro ao gravar andamento." });
  }
}

// src/http/controllers/analysis/route.ts
var storage = import_fastify_multer.default.memoryStorage();
var upload = (0, import_fastify_multer.default)({ storage });
async function analysisRoutes(app2) {
  app2.register(import_fastify_multer.default.contentParser);
  app2.post(
    "/dict/upload",
    {
      preHandler: upload.fields([{ name: "files1", maxCount: 10 }, { name: "files2", maxCount: 10 }])
    },
    uploadFilesHandler
  );
  app2.get("/dict/hist", getHistHandler);
  app2.get("/dict/returnAnalysis", returnAnalysisHandler);
  app2.delete("/dict", deleteAnalysisHandler);
  app2.post("/dict/createAnalysis", createAnalysisHandler);
}

// src/app.ts
var import_cors = __toESM(require("@fastify/cors"));

// src/http/controllers/reserv/get-all.ts
var import_zod15 = require("zod");

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

// src/use-cases/reserv/get-all-reserv.ts
var import_date_fns = require("date-fns");
var GetAllReservUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(page, pageSize) {
    const offset = (page - 1) * pageSize;
    const reservs = await this.reservRepository.findDistinctByFonte(pageSize, offset);
    const total = await this.reservRepository.countDistinctFonte();
    const hasNext = offset + reservs.length < total;
    return {
      data: reservs.map((reserv) => ({
        ...reserv,
        dias: this.calculateDays(reserv)
      })),
      total,
      hasNext
    };
  }
  calculateDays(reserv) {
    const dataIni = (0, import_date_fns.parse)(reserv.data_ini, "dd/MM/yyyy", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns.parse)(reserv.data_fim, "dd/MM/yyyy", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    return (0, import_date_fns.differenceInDays)(dataFim, dataIni);
  }
};

// src/use-cases/factory/reserv/make-get-all-reservs-use-case.ts
function makeGetAllReservUseCase() {
  const reservRepository = new ReservRepository();
  return new GetAllReservUseCase(reservRepository);
}

// src/http/controllers/reserv/get-all.ts
async function getAllReserv(request, reply) {
  const querySchema = import_zod15.z.object({
    page: import_zod15.z.string().optional(),
    pageSize: import_zod15.z.string().optional()
  });
  const { page = "1", pageSize = "10" } = querySchema.parse(request.query);
  const getAllReservUseCase = makeGetAllReservUseCase();
  const result = await getAllReservUseCase.handler(parseInt(page), parseInt(pageSize));
  reply.send(result);
}

// src/http/controllers/reserv/get-by-id.ts
var import_zod16 = require("zod");

// src/use-cases/reserv/get-reserv-by-source.ts
var import_date_fns2 = require("date-fns");
var GetReservByPrwAndIdUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(prw, id) {
    const reservs = await this.reservRepository.findByPrwAndId(prw, id);
    return reservs.map((reserv) => ({
      ...reserv,
      dias: this.calculateDuration(reserv)
    }));
  }
  calculateDuration(reserv) {
    const dataIni = (0, import_date_fns2.parse)(`${reserv.data_ini} ${reserv.hora}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns2.parse)(`${reserv.data_fim} ${reserv.hora_fim || "00:00"}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const totalMinutes = (0, import_date_fns2.differenceInMinutes)(dataFim, dataIni);
    const dias = Math.floor(totalMinutes / (24 * 60));
    const horas = Math.floor(totalMinutes % (24 * 60) / 60);
    const minutos = totalMinutes % 60;
    return `${dias} dias, ${horas} horas, ${minutos} minutos`;
  }
};

// src/use-cases/factory/reserv/make-get-reserv-by-source-use-case.ts
function makeGetReservByPrwAndIdUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservByPrwAndIdUseCase(reservRepository);
}

// src/http/controllers/reserv/get-by-id.ts
async function getReservByPrwAndId(request, reply) {
  const paramsSchema = import_zod16.z.object({
    id: import_zod16.z.string(),
    prw: import_zod16.z.string()
  });
  const { id, prw } = paramsSchema.parse(request.params);
  const getReservByPrwAndIdUseCase = makeGetReservByPrwAndIdUseCase();
  const results = await getReservByPrwAndIdUseCase.handler(prw, id);
  reply.send(results);
}

// src/http/controllers/reserv/delete.ts
var import_zod17 = require("zod");

// src/repositories/typeorm/source.repository.ts
var SourceRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Source);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll(search) {
    const queryBuilder = this.repository.createQueryBuilder("source");
    if (search) {
      const searchLower = `%${search.toLowerCase()}%`;
      queryBuilder.where("LOWER(source.source) LIKE :searchLower", { searchLower }).orWhere("LOWER(source.name) LIKE :searchLower", { searchLower });
    }
    return queryBuilder.orderBy("source.name", "ASC").getMany();
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async findByPrw(name) {
    return this.repository.findOne({ where: { name } });
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

// src/use-cases/reserv/delete-reserv.ts
var DeleteReservUseCase = class {
  constructor(reservRepository, sourceRepository) {
    this.reservRepository = reservRepository;
    this.sourceRepository = sourceRepository;
  }
  async handler(id) {
    const reservEntry = await this.reservRepository.findById(id);
    if (!reservEntry) {
      throw new Error("Registro n\xE3o encontrado.");
    }
    const sourceEntry = await this.sourceRepository.findByPrw(reservEntry.fonte);
    if (!sourceEntry) {
      throw new Error("Fonte n\xE3o encontrada na tabela Source.");
    }
    await this.sourceRepository.updateReservStatus(reservEntry.fonte, false, null);
    await this.reservRepository.deleteById(id);
  }
};

// src/use-cases/factory/reserv/make-delete-reserv-use-case.ts
function makeDeleteReservUseCase() {
  const reservRepository = new ReservRepository();
  const sourceRepository = new SourceRepository();
  return new DeleteReservUseCase(reservRepository, sourceRepository);
}

// src/http/controllers/reserv/delete.ts
async function deleteReserv(request, reply) {
  const querySchema = import_zod17.z.object({
    id: import_zod17.z.string()
  });
  const { id } = querySchema.parse(request.query);
  const deleteReservUseCase = makeDeleteReservUseCase();
  try {
    await deleteReservUseCase.handler(id);
    reply.code(200).send({ message: "Reserva deletada com sucesso e fonte atualizada." });
  } catch (error2) {
    console.error("Erro ao deletar registros:", error2);
    reply.code(500).send({ message: "Erro ao deletar registros." });
  }
}

// src/http/controllers/reserv/validUpload.ts
var import_zod18 = require("zod");

// src/use-cases/reserv/valid-upload.ts
var ValidUploadUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(dev) {
    return this.reservRepository.findActiveByDev(dev);
  }
};

// src/use-cases/factory/reserv/make-valid-upload-use-case.ts
function makeValidUploadUseCase() {
  const reservRepository = new ReservRepository();
  return new ValidUploadUseCase(reservRepository);
}

// src/http/controllers/reserv/validUpload.ts
async function validUpload(request, reply) {
  const querySchema = import_zod18.z.object({
    dev: import_zod18.z.string()
  });
  const { dev } = querySchema.parse(request.query);
  const validUploadUseCase = makeValidUploadUseCase();
  const fontes = await validUploadUseCase.handler(dev);
  reply.send(fontes);
}

// src/http/controllers/reserv/route.ts
async function reservRoutes(app2) {
  app2.get("/reserv", getAllReserv);
  app2.get("/reserv/:id/:prw", getReservByPrwAndId);
  app2.delete("/reserv", deleteReserv);
  app2.get("/reserv/validUpload", validUpload);
}

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

// src/utils/parseFile.ts
async function parseFile(path2) {
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
    const file = await fs2.open(path2, "r");
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
    await fs3.mkdir("tmp/", { recursive: true });
    const processEntry = async (entry) => {
      const fileName = pathlib.basename(entry.path);
      const fileExt = pathlib.extname(entry.path).toLowerCase();
      if (![".prw", ".prx", ".tlpp"].includes(fileExt)) return;
      const contentBuffer = await entry.buffer();
      const detectedEncoding = chardet.detect(contentBuffer) || "UTF-8";
      const content = iconv.decode(contentBuffer, detectedEncoding);
      const utf8Buffer = Buffer.from(content, "utf-8");
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
          label: "Documenta\xE7\xE3o",
          category: result.category,
          name: fileName,
          reserv: false,
          tables: result.tables.length,
          functions: result.functions.length,
          source: result.source,
          line: lines.length ?? 0,
          blankLines: blankLinesCount,
          commentedLines: commentedLinesCount
        });
        const currentDate = /* @__PURE__ */ new Date();
        const dataFim = currentDate.toLocaleDateString("pt-BR");
        const horaFim = currentDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        await this.reservRepository.updateSource(
          { source_dev: result.source, data_fim: dataFim, hora_fim: horaFim },
          { fonte: fileName, data_fim: "" }
        );
        await Promise.all(result.functions.map(async (f) => {
          await this.sourceFunctionRepository.create({
            type: f.type,
            name: f.name,
            source: f.body.join("\n"),
            line: lines.length ?? 0,
            blankLines: blankLinesCount,
            commentedLines: commentedLinesCount,
            Source: s
          });
        }));
        await Promise.all(result.tables.map(async (table) => {
          const t = await this.sourceTableRepository.create({
            name: table.name,
            source: s
          });
          await Promise.all(table.fields.map(async (field) => {
            await this.sourceTableFieldRepository.create({
              name: field,
              sourceTable: t
            });
          }));
        }));
      } catch (error2) {
        console.error(`Erro ao processar o arquivo ${fileName}:`, error2);
      }
    };
    await Promise.all(entries.files.map(processEntry));
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

// src/http/controllers/source/unzip.ts
var path = __toESM(require("path"));
var fs4 = __toESM(require("fs/promises"));
var fsSync = __toESM(require("fs"));
async function unzipSource(request, reply) {
  const { user, commit } = request.params;
  const { uuid, files } = request.body;
  if (!files || files.length === 0) {
    return reply.status(400).send({ message: "No file uploaded" });
  }
  const fileData = files[0];
  const buffer = Buffer.from(fileData.base64, "base64");
  const uploadsDir = path.join(process.cwd(), "uploads");
  const filePath = path.join(uploadsDir, `${uuid}_${fileData.file_name}`);
  if (!fsSync.existsSync(uploadsDir)) {
    await fs4.mkdir(uploadsDir, { recursive: true });
  }
  await fs4.writeFile(filePath, buffer);
  const unzipSourceUseCase = makeUnzipSourceUseCase();
  try {
    await unzipSourceUseCase.handler(uuid, filePath, user, commit);
    reply.code(200).send({ message: "Files received and processed" });
  } catch (error2) {
    console.error(error2);
    reply.status(500).send({ message: "Error processing the file", error: error2 });
  }
}

// src/use-cases/source/get-all-sources.ts
var GetAllSourcesUseCase = class {
  constructor(sourceRepository) {
    this.sourceRepository = sourceRepository;
  }
  async handler(search) {
    return this.sourceRepository.findAll(search);
  }
};

// src/use-cases/factory/source/make-get-all-sources-use-case.ts
function makeGetAllSourcesUseCase() {
  const sourceRepository = new SourceRepository();
  return new GetAllSourcesUseCase(sourceRepository);
}

// src/http/controllers/source/get-all.ts
var import_zod19 = require("zod");
async function getAllSources(request, reply) {
  const querySchema = import_zod19.z.object({
    search: import_zod19.z.string().optional()
  });
  const { search } = querySchema.parse(request.query);
  const getAllSourcesUseCase = makeGetAllSourcesUseCase();
  const sources = await getAllSourcesUseCase.handler(search);
  reply.send({ items: sources });
}

// src/use-cases/source/get-source-detail.ts
var GetSourceDetailUseCase = class {
  constructor(sourceRepository, sourceFunctionRepository, sourceTableRepository, sourceTableFieldRepository) {
    this.sourceRepository = sourceRepository;
    this.sourceFunctionRepository = sourceFunctionRepository;
    this.sourceTableRepository = sourceTableRepository;
    this.sourceTableFieldRepository = sourceTableFieldRepository;
  }
  async handler(id) {
    const source = await this.sourceRepository.findById(id);
    if (!source) {
      return null;
    }
    const functions = await this.sourceFunctionRepository.findBySource(id);
    const tables = await this.sourceTableRepository.findBySource(id);
    for (const table of tables) {
      const fields = await this.sourceTableFieldRepository.findBySourceTable(table.id);
      table.fields = fields;
    }
    source.Functions = functions;
    source.Tables = tables;
    return source;
  }
};

// src/use-cases/factory/source/make-get-source-detail-use-case.ts
function makeGetSourceDetailUseCase() {
  const sourceRepository = new SourceRepository();
  const sourceFunctionRepository = new SourceFunctionRepository();
  const sourceTableRepository = new SourceTableRepository();
  const sourceTableFieldRepository = new SourceTableFieldRepository();
  return new GetSourceDetailUseCase(
    sourceRepository,
    sourceFunctionRepository,
    sourceTableRepository,
    sourceTableFieldRepository
  );
}

// src/http/controllers/source/get-detail.ts
var import_zod20 = require("zod");
async function getSourceDetail(request, reply) {
  const paramsSchema = import_zod20.z.object({
    id: import_zod20.z.preprocess((val) => Number(val), import_zod20.z.number())
  });
  const { id } = paramsSchema.parse(request.params);
  const getSourceDetailUseCase = makeGetSourceDetailUseCase();
  const sourceDetail = await getSourceDetailUseCase.handler(id);
  reply.send({ item: sourceDetail });
}

// src/use-cases/source/delete-source.ts
var DeleteSourceUseCase = class {
  constructor(sourceRepository, histRepository) {
    this.sourceRepository = sourceRepository;
    this.histRepository = histRepository;
  }
  async handler(name, user) {
    const source = await this.sourceRepository.findByPrw(name);
    if (!source) {
      throw new Error("Source not found");
    }
    await this.sourceRepository.delete(name);
    await this.histRepository.create({
      fonte: source.name,
      user,
      action: "DELETE",
      source: source.source,
      commit: `Registro deletado pelo usuario ${user}`
    });
  }
};

// src/use-cases/factory/source/make-delete-source-use-case.ts
function makeDeleteSourceUseCase() {
  const sourceRepository = new SourceRepository();
  const histRepository = new HistRepository();
  return new DeleteSourceUseCase(sourceRepository, histRepository);
}

// src/http/controllers/source/delete.ts
var import_zod21 = require("zod");
async function deleteSource(request, reply) {
  const paramsSchema = import_zod21.z.object({
    prw: import_zod21.z.string(),
    user: import_zod21.z.string()
  });
  const { prw, user } = paramsSchema.parse(request.params);
  const deleteSourceUseCase = makeDeleteSourceUseCase();
  await deleteSourceUseCase.handler(prw, user);
  reply.code(200).send({ message: "Fonte deletado com sucesso." });
}

// src/use-cases/source/delete-all-sources.ts
var DeleteAllSourcesUseCase = class {
  constructor(sourceRepository) {
    this.sourceRepository = sourceRepository;
  }
  async execute() {
    await this.sourceRepository.deleteAll();
  }
};

// src/use-cases/factory/source/make-delete-all-sources-use-case.ts
function makeDeleteAllSourcesUseCase() {
  const sourceRepository = new SourceRepository();
  return new DeleteAllSourcesUseCase(sourceRepository);
}

// src/http/controllers/source/delete-all.ts
async function deleteAllSources(request, reply) {
  const deleteAllSourcesUseCase = makeDeleteAllSourcesUseCase();
  try {
    await deleteAllSourcesUseCase.execute();
    reply.code(200).send({ message: "All sources deleted successfully." });
  } catch (error2) {
    console.error("Error deleting all sources:", error2);
    reply.code(500).send({ message: "Internal Server Error" });
  }
}

// src/use-cases/source/reserv-source.ts
var ReservSourceUseCase = class {
  constructor(sourceRepository, reservRepository) {
    this.sourceRepository = sourceRepository;
    this.reservRepository = reservRepository;
  }
  async handler({ prw, user }) {
    const sourceRecord = await this.sourceRepository.findByPrw(prw);
    if (!sourceRecord) {
      throw new Error("Nenhum registro encontrado no Source.");
    }
    const sourceOri = sourceRecord.source;
    await this.sourceRepository.update(prw, { reserv: true });
    const currentDate = /* @__PURE__ */ new Date();
    const dataIni = currentDate.toLocaleDateString("pt-BR");
    const hora = currentDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    await this.reservRepository.create({
      fonte: prw,
      dev: user,
      data_ini: dataIni,
      hora,
      source_ori: sourceOri,
      source_dev: "",
      data_fim: "",
      hora_fim: ""
    });
  }
};

// src/use-cases/factory/source/make-reserv-source-use-case.ts
function makeReservSourceUseCase() {
  const sourceRepository = new SourceRepository();
  const reservRepository = new ReservRepository();
  return new ReservSourceUseCase(sourceRepository, reservRepository);
}

// src/http/controllers/source/reserv.ts
var import_zod22 = require("zod");
async function reservSource(request, reply) {
  console.log("API reserv");
  const paramsSchema = import_zod22.z.object({
    prw: import_zod22.z.string(),
    user: import_zod22.z.string()
  });
  const { prw, user } = paramsSchema.parse(request.params);
  try {
    const reservSourceUseCase = makeReservSourceUseCase();
    await reservSourceUseCase.handler({ prw, user });
    reply.status(200).send({ message: "Registros atualizados e reservados com sucesso." });
  } catch (error2) {
    console.error("Erro ao atualizar registros:", error2);
    reply.status(500).send({ message: "Erro ao atualizar registros." });
  }
}

// src/use-cases/source/update-source.ts
var UpdateSourceUseCase = class {
  constructor(sourceRepository) {
    this.sourceRepository = sourceRepository;
  }
  async handler(prw, updates) {
    await this.sourceRepository.update(prw, updates);
  }
};

// src/use-cases/factory/source/make-update-source-use-case.ts
function makeUpdateSourceUseCase() {
  const sourceRepository = new SourceRepository();
  return new UpdateSourceUseCase(sourceRepository);
}

// src/http/controllers/source/update.ts
var import_zod23 = require("zod");
async function updateSource(request, reply) {
  const paramsSchema = import_zod23.z.object({
    prw: import_zod23.z.string(),
    category: import_zod23.z.string()
  });
  const { prw, category } = paramsSchema.parse(request.params);
  const updateSourceUseCase = makeUpdateSourceUseCase();
  await updateSourceUseCase.handler(prw, { category });
  reply.send({ message: "Categoria alterada com sucesso." });
}

// src/http/controllers/source/route.ts
async function sourceRoutes(app2) {
  app2.post("/source/:user/:commit", unzipSource);
  app2.get("/source", getAllSources);
  app2.get("/source/detail/:id", getSourceDetail);
  app2.delete("/source/:prw/:user", deleteSource);
  app2.delete("/source", deleteAllSources);
  app2.get("/source/reserv/:prw/:user", reservSource);
  app2.post("/source/reserv", reservSource);
  app2.get("/source/category/:prw/:category", updateSource);
}

// src/http/middlewares/jwt-validate.ts
async function validateJwt(request, reply) {
  try {
    const routeFreeList = ["POST-/login"];
    const validateRoute = `${request.method}-${request.routerPath}`;
    if (routeFreeList.includes(validateRoute)) return;
    console.log("Token recebido no cabe\xE7alho:", request.headers.authorization);
    await request.jwtVerify();
    console.log("Token validado com sucesso");
  } catch (error2) {
    console.error("Erro na valida\xE7\xE3o do token:", error2);
    reply.status(401).send({ message: "Unauthorized" });
  }
}

// src/app.ts
var import_jwt = __toESM(require("@fastify/jwt"));

// src/http/controllers/analysis-process/create.ts
var import_zod24 = require("zod");

// src/repositories/typeorm/analysis-result.repository.ts
var AnalysisResultRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(AnalysisResult);
  }
  async create(data) {
    return this.repository.save(data);
  }
  async findAll() {
    return this.repository.find({
      order: {
        created_at: "DESC"
      }
    });
  }
  async findById(id) {
    return this.repository.findOne({ where: { id_analysis: id } });
  }
  async update(id_analysis, updates) {
    await this.repository.update({ id_analysis }, updates);
  }
  async delete(id) {
    await this.repository.delete({ id_analysis: id });
  }
  async findAndCount(page, pageSize) {
    return this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: {
        created_at: "DESC"
      }
    });
  }
};

// src/repositories/typeorm/attention-point.repository.ts
var AttentionPointRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(AttentionPoint);
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
  async findByAnalysisId(id_analysis) {
    return this.repository.find({ where: { id_analysis } });
  }
  async update(id, updates) {
    await this.repository.update({ id }, updates);
  }
  async delete(id) {
    await this.repository.delete({ id });
  }
  async deleteByAnalysisId(id_analysis) {
    await this.repository.delete({ id_analysis });
  }
};

// src/repositories/typeorm/difference.repository.ts
var DifferenceRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Difference);
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
  async findByAttentionPointId(attention_point_id) {
    return this.repository.find({ where: { attention_point_id } });
  }
  async update(id, updates) {
    await this.repository.update({ id }, updates);
  }
  async delete(id) {
    await this.repository.delete({ id });
  }
  async deleteByAttentionPointId(attention_point_id) {
    await this.repository.delete({ attention_point_id });
  }
};

// src/use-cases/analysis-process/create-analysis-process.ts
var import_typeorm26 = require("typeorm");
var CreateAnalysisProcessUseCase = class {
  constructor(analysisResultRepository, attentionPointRepository, differenceRepository, sourceRepository, dictionaryRepository) {
    this.analysisResultRepository = analysisResultRepository;
    this.attentionPointRepository = attentionPointRepository;
    this.differenceRepository = differenceRepository;
    this.sourceRepository = sourceRepository;
    this.dictionaryRepository = dictionaryRepository;
  }
  async handler(data) {
    const { id, fontes, categorys, analysisId } = data;
    const analysisResult = await this.analysisResultRepository.create({
      id_analysis: analysisId,
      fontes: fontes.length === 0 ? categorys.length : fontes.length,
      fontes_points: 0,
      total_points: 0,
      status: "processando",
      dic: id
    });
    let whereCondition = {};
    if (fontes.length > 0) {
      whereCondition = { name: (0, import_typeorm26.In)(fontes) };
    } else {
      whereCondition = { category: (0, import_typeorm26.In)(categorys) };
    }
    const sourceRecords = await this.sourceRepository.findByConditions(whereCondition);
    const analysisRecord = await this.dictionaryRepository.findById(id);
    if (!analysisRecord) {
      throw new Error("Analysis not found");
    }
    const analysisData = analysisRecord.analysis;
    const keyDetailsMap = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    for (const key in analysisData) {
      if (analysisData.hasOwnProperty(key)) {
        const entries = analysisData[key];
        for (const entry of entries) {
          const keyDetail = entry.chave.split(":")[1];
          keys.add(keyDetail);
          if (!keyDetailsMap.has(keyDetail)) {
            keyDetailsMap.set(keyDetail, []);
          }
          keyDetailsMap.get(keyDetail).push({
            instalacao: entry.instalacao,
            tabela: entry.tabela,
            dif: entry.dif,
            chave: entry.chave
          });
        }
      }
    }
    const uniqueSources = /* @__PURE__ */ new Set();
    let totalAttentionPoints = 0;
    console.log(sourceRecords);
    for (const source of sourceRecords) {
      const sourceName = source.name;
      const category = source.category || "N/A";
      const sourceContent = source.source;
      if (!sourceContent) {
        console.error("Source content is empty for source:", sourceName);
        continue;
      }
      const lines = sourceContent.split("\n");
      if (lines.length === 0) {
        console.error("No lines found for source:", sourceName);
        continue;
      }
      let pointNumber = 0;
      for (const key of keys) {
        let localFontCount = 0;
        const linesWithKeys = /* @__PURE__ */ new Set();
        const keyRegex = new RegExp(`\\b${key}\\b`);
        for (let i = 0; i < lines.length; i++) {
          if (keyDetailsMap.has(key)) {
            const details = keyDetailsMap.get(key);
            for (const detail of details) {
              if (detail.tabela.startsWith("SIX")) {
                if (lines[i].includes("dbsetorder") || lines[i].includes("posicione")) {
                  if (new RegExp(`\\b${key.slice(0, 3)}\\b`).test(lines[i])) {
                    linesWithKeys.add(i + 1);
                    localFontCount++;
                  }
                }
              } else {
                if (keyRegex.test(lines[i])) {
                  linesWithKeys.add(i + 1);
                  localFontCount++;
                }
              }
            }
          }
        }
        if (localFontCount > 0) {
          uniqueSources.add(sourceName);
          const attentionPoint = await this.attentionPointRepository.create({
            id_analysis: analysisResult.id_analysis,
            source_name: sourceName,
            category,
            total_points: localFontCount,
            point_number: ++pointNumber,
            line_numbers: [...linesWithKeys].join(",")
          });
          totalAttentionPoints++;
          if (keyDetailsMap.has(key)) {
            for (const detail of keyDetailsMap.get(key)) {
              const difference = await this.differenceRepository.create({
                attention_point_id: attentionPoint.id,
                source_name: sourceName,
                environment: detail.instalacao,
                table_name: detail.tabela,
                key: detail.chave,
                value: detail.dif
              });
            }
          }
        }
      }
    }
    await this.analysisResultRepository.update(analysisResult.id_analysis, {
      fontes_points: uniqueSources.size,
      total_points: totalAttentionPoints,
      status: "concluido"
    });
  }
};

// src/use-cases/factory/analysis-process/make-create-analysis-process-use-case.ts
function makeCreateAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  const attentionPointRepository = new AttentionPointRepository();
  const differenceRepository = new DifferenceRepository();
  const sourceRepository = new SourceRepository();
  const dictionaryRepository = new AnalysisRepository();
  return new CreateAnalysisProcessUseCase(
    analysisResultRepository,
    attentionPointRepository,
    differenceRepository,
    sourceRepository,
    // Passa o SourceRepository
    dictionaryRepository
    // Passa o DictionaryRepository
  );
}

// src/http/controllers/analysis-process/create.ts
async function createAnalysisProcess(request, reply) {
  const bodySchema = import_zod24.z.object({
    id: import_zod24.z.string(),
    fontes: import_zod24.z.array(import_zod24.z.string()),
    categorys: import_zod24.z.array(import_zod24.z.string()),
    analysisId: import_zod24.z.string()
  });
  const { id, fontes, categorys, analysisId } = bodySchema.parse(request.body);
  const createAnalysisProcessUseCase = makeCreateAnalysisProcessUseCase();
  await createAnalysisProcessUseCase.handler({ id, fontes, categorys, analysisId });
  reply.code(201).send({ message: "Analysis process created successfully." });
}

// src/http/controllers/analysis-process/getAll.ts
var import_zod25 = require("zod");

// src/use-cases/analysis-process/get-all-analysis-process.ts
var GetAllAnalysisProcessUseCase = class {
  constructor(analysisResultRepository) {
    this.analysisResultRepository = analysisResultRepository;
  }
  async handler(page, pageSize) {
    const [data, count] = await this.analysisResultRepository.findAndCount(page, pageSize);
    const hasNext = (page - 1) * pageSize + data.length < count;
    return { data, page, pageSize, hasNext };
  }
};

// src/use-cases/factory/analysis-process/make-get-all-analysis-process-use-case.ts
function makeGetAllAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  return new GetAllAnalysisProcessUseCase(analysisResultRepository);
}

// src/http/controllers/analysis-process/getAll.ts
async function getAllAnalysisProcess(request, reply) {
  const querySchema = import_zod25.z.object({
    page: import_zod25.z.string().optional(),
    pageSize: import_zod25.z.string().optional()
  });
  const { page, pageSize } = querySchema.parse(request.query);
  const pageNumber = parseInt(page || "1", 10);
  const pageSizeNumber = parseInt(pageSize || "10", 10);
  if (pageNumber <= 0 || pageSizeNumber <= 0) {
    return reply.status(400).send({ error: "Par\xE2metros page e pageSize devem ser maiores que zero." });
  }
  const getAllAnalysisProcessUseCase = makeGetAllAnalysisProcessUseCase();
  try {
    const result = await getAllAnalysisProcessUseCase.handler(pageNumber, pageSizeNumber);
    reply.status(200).send(result);
  } catch (error2) {
    console.error("Erro ao realizar consulta na tabela AnalysisResult:", error2);
    reply.status(500).send("Erro ao realizar consulta na tabela AnalysisResult.");
  }
}

// src/http/controllers/analysis-process/getDetails.ts
var import_zod26 = require("zod");

// src/use-cases/analysis-process/get-analysis-details.ts
var GetAnalysisDetailsUseCase = class {
  constructor(analysisResultRepository, attentionPointRepository, differenceRepository) {
    this.analysisResultRepository = analysisResultRepository;
    this.attentionPointRepository = attentionPointRepository;
    this.differenceRepository = differenceRepository;
  }
  async handler(analysisId) {
    const analysisResult = await this.analysisResultRepository.findById(analysisId);
    if (!analysisResult) {
      throw new Error("Analysis not found");
    }
    const attentionPoints = await this.attentionPointRepository.findByAnalysisId(analysisId);
    const response = {
      id: analysisResult.id_analysis,
      dic: analysisResult.dic,
      totalFont: analysisResult.fontes,
      totalPoint: analysisResult.total_points,
      fontesPoint: analysisResult.fontes_points,
      dataImpressao: (/* @__PURE__ */ new Date()).toISOString(),
      pontosAtencao: []
    };
    for (const point of attentionPoints) {
      const differences = await this.differenceRepository.findByAttentionPointId(point.id);
      response.pontosAtencao.push({
        fonte: point.source_name,
        pontoAtencao: point.point_number,
        categoria: point.category,
        totalPontos: point.total_points,
        linhasFonte: point.line_numbers,
        diferencas: differences.map((difference) => ({
          ambiente: difference.environment,
          tabela: difference.table_name,
          chave: difference.key,
          valor: difference.value
        }))
      });
    }
    return response;
  }
};

// src/use-cases/factory/analysis-process/make-get-analysis-details-use-case.ts
function makeGetAnalysisDetailsUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  const attentionPointRepository = new AttentionPointRepository();
  const differenceRepository = new DifferenceRepository();
  return new GetAnalysisDetailsUseCase(
    analysisResultRepository,
    attentionPointRepository,
    differenceRepository
  );
}

// src/http/controllers/analysis-process/getDetails.ts
async function getAnalysisDetails(request, reply) {
  const querySchema = import_zod26.z.object({
    analysisId: import_zod26.z.string()
  });
  const { analysisId } = querySchema.parse(request.query);
  const getAnalysisDetailsUseCase = makeGetAnalysisDetailsUseCase();
  const details = await getAnalysisDetailsUseCase.handler(analysisId);
  reply.send(details);
}

// src/http/controllers/analysis-process/delete.ts
var import_zod27 = require("zod");

// src/use-cases/analysis-process/delete-analysis-process.ts
var DeleteAnalysisProcessUseCase = class {
  constructor(analysisResultRepository) {
    this.analysisResultRepository = analysisResultRepository;
  }
  async handler(id) {
    await this.analysisResultRepository.delete(id);
  }
};

// src/use-cases/factory/analysis-process/make-delete-analysis-process-use-case.ts
function makeDeleteAnalysisProcessUseCase() {
  const analysisResultRepository = new AnalysisResultRepository();
  return new DeleteAnalysisProcessUseCase(analysisResultRepository);
}

// src/http/controllers/analysis-process/delete.ts
async function deleteAnalysisProcess(request, reply) {
  const paramsSchema = import_zod27.z.object({
    id: import_zod27.z.string()
  });
  const { id } = paramsSchema.parse(request.params);
  const deleteAnalysisProcessUseCase = makeDeleteAnalysisProcessUseCase();
  await deleteAnalysisProcessUseCase.handler(id);
  reply.code(200).send({ message: "Analysis process deleted successfully." });
}

// src/http/controllers/analysis-process/route.ts
async function analysisProcessRoutes(app2) {
  app2.post("/analysis-process", createAnalysisProcess);
  app2.get("/analysis-process", getAllAnalysisProcess);
  app2.get("/analysis-process/details", getAnalysisDetails);
  app2.delete("/analysis-process/:id", deleteAnalysisProcess);
}

// src/app.ts
var app = (0, import_fastify.default)({
  bodyLimit: 524288e3,
  // 500MB
  connectionTimeout: 3e5
  // 5 minutes
});
app.register(import_cors.default, {
  origin: "*"
});
app.register(import_jwt.default, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: "720m" }
});
app.addHook("onRequest", validateJwt);
app.register(categoryRoutes);
app.register(histRoutes);
app.register(userRoutes);
app.register(analysisRoutes);
app.register(reservRoutes);
app.register(sourceRoutes);
app.register(analysisProcessRoutes);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
