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

// src/http/controllers/analysis/route.ts
var route_exports = {};
__export(route_exports, {
  analysisRoutes: () => analysisRoutes
});
module.exports = __toCommonJS(route_exports);
var import_fastify_multer2 = __toESM(require("fastify-multer"), 1);

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
  async updateAnalysisStatus(analysisId, jsonAnalysis2) {
    await this.repository.update(analysisId, {
      status: "conclu\xEDdo",
      analysis: jsonAnalysis2
    });
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
var import_fastify_multer = __toESM(require("fastify-multer"), 1);
var readline = __toESM(require("readline"), 1);

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
var storage = import_fastify_multer.default.memoryStorage();
var upload = (0, import_fastify_multer.default)({ storage });
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
      const compositeKey = createCompositeKey(header1, columns1, keyColumnIndices);
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
            chave: `${compositeKey}`
          });
          jsonAnalysis[prefix].push({
            instalacao: uploadsData[1].name.toUpperCase(),
            tabela: file2.originalname.substring(0, 6).toUpperCase(),
            dif: `${columnName}: ${columns2[index].trim()}`,
            sequencia: seq2,
            isOk: false,
            chave: `${compositeKey}`
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
    await makeUpdateAnalysisStatusUseCase().handler(jsonAnalysis, analysisId);
    reply.send("Arquivos recebidos e processados.");
  } catch (error2) {
    console.error("Erro durante a an\xE1lise:", error2);
    if (!reply.sent) {
      reply.status(500).send("Erro ao processar os arquivos.");
    }
  }
}

// src/http/controllers/analysis/route.ts
var storage2 = import_fastify_multer2.default.memoryStorage();
var upload2 = (0, import_fastify_multer2.default)({ storage: storage2 });
async function analysisRoutes(app) {
  app.post(
    "/analysis/upload",
    {
      preHandler: upload2.fields([{ name: "files1", maxCount: 10 }, { name: "files2", maxCount: 10 }])
    },
    uploadFilesHandler
    // Aqui estamos usando `as any` para evitar problemas de tipo
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  analysisRoutes
});
