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

// src/use-cases/factory/analysis/make-update-analysis-status-use-case.ts
var make_update_analysis_status_use_case_exports = {};
__export(make_update_analysis_status_use_case_exports, {
  makeUpdateAnalysisStatusUseCase: () => makeUpdateAnalysisStatusUseCase
});
module.exports = __toCommonJS(make_update_analysis_status_use_case_exports);

// src/entities/analysis.entity.ts
var import_typeorm = require("typeorm");
var Analysis = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryColumn)({ type: "varchar" })
], Analysis.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "json" })
], Analysis.prototype, "analysis", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "varchar" })
], Analysis.prototype, "status", 2);
Analysis = __decorateClass([
  (0, import_typeorm.Entity)("analysis")
], Analysis);

// src/lib/typeorm/typeorm.ts
var import_typeorm5 = require("typeorm");

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
  DATABASE_PORT: import_zod.z.coerce.number()
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
var import_typeorm2 = require("typeorm");
var Category = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryColumn)("varchar")
], Category.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Category.prototype, "content", 2);
Category = __decorateClass([
  (0, import_typeorm2.Entity)("category")
], Category);

// src/entities/history.entity.ts
var import_typeorm3 = require("typeorm");
var Hist = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)()
], Hist.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], Hist.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], Hist.prototype, "user", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], Hist.prototype, "action", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], Hist.prototype, "commit", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Hist.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text", { nullable: true })
], Hist.prototype, "sourceOld", 2);
Hist = __decorateClass([
  (0, import_typeorm3.Entity)("hist_source")
], Hist);

// src/entities/user.entity.ts
var import_typeorm4 = require("typeorm");
var bcrypt = __toESM(require("bcryptjs"), 1);
var User = class {
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
};
__decorateClass([
  (0, import_typeorm4.PrimaryColumn)("uuid")
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "varchar" })
], User.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "varchar" })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "varchar" })
], User.prototype, "senha", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "varchar" })
], User.prototype, "group", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "boolean" })
], User.prototype, "admin", 2);
__decorateClass([
  (0, import_typeorm4.BeforeInsert)()
], User.prototype, "hashPassword", 1);
User = __decorateClass([
  (0, import_typeorm4.Entity)("users")
], User);

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm5.DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Category, Hist, User, Analysis],
  migrations: ["src/lib/typeorm/migrations/*.ts"],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log(`Database with typeorm started at port #${env.DATABASE_PORT}`);
}).catch(() => {
  console.error(`Error connecting to database with typeorm, ${import_console.error}`);
});

// src/repositories/typeorm/analysis.repository.ts
var AnalysisRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Analysis);
  }
  async updateAnalysisStatus(analysisId, jsonAnalysis) {
    await this.repository.update(analysisId, {
      status: "conclu\xEDdo",
      analysis: jsonAnalysis
    });
  }
};

// src/use-cases/analysis/update-analysis-status.ts
var UpdateAnalysisStatusUseCase = class {
  constructor(analysisRepository) {
    this.analysisRepository = analysisRepository;
  }
  async handler(analysisId, jsonAnalysis) {
    await this.analysisRepository.updateAnalysisStatus(analysisId, jsonAnalysis);
  }
};

// src/use-cases/factory/analysis/make-update-analysis-status-use-case.ts
function makeUpdateAnalysisStatusUseCase() {
  const analysisRepository = new AnalysisRepository();
  return new UpdateAnalysisStatusUseCase(analysisRepository);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeUpdateAnalysisStatusUseCase
});
