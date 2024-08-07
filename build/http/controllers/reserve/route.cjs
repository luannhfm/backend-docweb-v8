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

// src/http/controllers/reserve/route.ts
var route_exports = {};
__export(route_exports, {
  reservRoutes: () => reservRoutes
});
module.exports = __toCommonJS(route_exports);

// src/http/controllers/reserve/getReserv.ts
var import_zod2 = require("zod");

// src/entities/reserv.entity.ts
var import_typeorm = require("typeorm");
var Reserv = class {
  static create(arg0) {
    throw new Error("Method not implemented.");
  }
  toJSON() {
    throw new Error("Method not implemented.");
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Reserv.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Reserv.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Reserv.prototype, "dev", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Reserv.prototype, "data_ini", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Reserv.prototype, "hora", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: true })
], Reserv.prototype, "data_fim", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: true })
], Reserv.prototype, "hora_fim", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], Reserv.prototype, "source_ori", 2);
__decorateClass([
  (0, import_typeorm.Column)("text", { nullable: true })
], Reserv.prototype, "source_dev", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Reserv.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Reserv.prototype, "updatedAt", 2);
Reserv = __decorateClass([
  (0, import_typeorm.Entity)("reserv")
], Reserv);

// src/lib/typeorm/typeorm.ts
var import_typeorm6 = require("typeorm");

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

// src/entities/analysis.entity.ts
var import_typeorm5 = require("typeorm");
var Analysis = class {
};
__decorateClass([
  (0, import_typeorm5.PrimaryColumn)({ type: "varchar" })
], Analysis.prototype, "id_analysis", 2);
__decorateClass([
  (0, import_typeorm5.Column)({ type: "json" })
], Analysis.prototype, "analysis", 2);
__decorateClass([
  (0, import_typeorm5.Column)({ type: "varchar" })
], Analysis.prototype, "status", 2);
Analysis = __decorateClass([
  (0, import_typeorm5.Entity)("analysis")
], Analysis);

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm6.DataSource({
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

// src/repositories/typeorm/reserv.repository.ts
var ReservRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Reserv);
  }
  async findByFonte(fonte, offset, limit) {
    return this.repository.find({
      where: { fonte },
      order: { createdAt: "DESC" },
      skip: offset,
      take: limit
    });
  }
  async countDistinctFonte() {
    const result = await this.repository.query(`SELECT COUNT(DISTINCT fonte) as count FROM reserv`);
    return result[0].count;
  }
  async findByPrw(prw) {
    return this.repository.find({
      where: { fonte: prw },
      order: { createdAt: "DESC" }
    });
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async deleteById(id) {
    await this.repository.delete(id);
  }
  async updateFonteReservStatus(fonte, status) {
    await this.repository.query(
      `UPDATE source SET reserv = $1 WHERE name = $2`,
      [status, fonte]
    );
  }
  async findValidUpload(dev) {
    return this.repository.find({
      where: {
        dev,
        data_fim: ""
      }
    });
  }
};

// src/use-cases/reserv/get-reserv.ts
var GetReservUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(fonte, offset, limit) {
    return this.reservRepository.findByFonte(fonte, offset, limit);
  }
  async countDistinctFonte() {
    return this.reservRepository.countDistinctFonte();
  }
};

// src/use-cases/factory/reserv/make-get-reserv-use-case.ts
function makeGetReservUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservUseCase(reservRepository);
}

// src/http/controllers/reserve/getReserv.ts
var import_date_fns = require("date-fns");
async function getReserv(request, reply) {
  const querySchema = import_zod2.z.object({
    fonte: import_zod2.z.string(),
    page: import_zod2.z.coerce.number().min(1).default(1),
    pageSize: import_zod2.z.coerce.number().min(1).default(10)
  });
  const { fonte, page, pageSize } = querySchema.parse(request.query);
  const offset = (page - 1) * pageSize;
  const getReservUseCase = makeGetReservUseCase();
  const recentReservs = await getReservUseCase.handler(fonte, offset, pageSize);
  const results = recentReservs.map((reserv) => {
    const dataIni = (0, import_date_fns.parse)(reserv.data_ini, "dd/MM/yyyy", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns.parse)(reserv.data_fim, "dd/MM/yyyy", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const dias = (0, import_date_fns.differenceInDays)(dataFim, dataIni);
    return {
      ...reserv,
      dias
    };
  });
  const totalReservs = await getReservUseCase.countDistinctFonte();
  const hasNext = offset + results.length < totalReservs;
  reply.status(200).send({
    data: results,
    page,
    pageSize,
    hasNext,
    total: totalReservs
  });
}

// src/http/controllers/reserve/getReservByPrw.ts
var import_zod3 = require("zod");

// src/use-cases/reserv/get-reserv-by-prw.ts
var GetReservByPrwAndIdUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(prw) {
    return this.reservRepository.findByPrw(prw);
  }
};

// src/use-cases/factory/reserv/make-get-reserv-by-prw-use-case.ts
function makeGetReservByPrwAndIdUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservByPrwAndIdUseCase(reservRepository);
}

// src/http/controllers/reserve/getReservByPrw.ts
var import_date_fns2 = require("date-fns");
async function getReservByPrwAndId(request, reply) {
  const paramsSchema = import_zod3.z.object({
    id: import_zod3.z.string(),
    prw: import_zod3.z.string()
  });
  const { id, prw } = paramsSchema.parse(request.params);
  const getReservByPrwAndIdUseCase = makeGetReservByPrwAndIdUseCase();
  const reservs = await getReservByPrwAndIdUseCase.handler(prw);
  const results = reservs.map((reserv) => {
    const dataIni = (0, import_date_fns2.parse)(`${reserv.data_ini} ${reserv.hora}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns2.parse)(`${reserv.data_fim} ${reserv.hora_fim || "00:00"}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const totalMinutes = (0, import_date_fns2.differenceInMinutes)(dataFim, dataIni);
    const dias = Math.floor(totalMinutes / (24 * 60));
    const horas = Math.floor(totalMinutes % (24 * 60) / 60);
    const minutos = totalMinutes % 60;
    const durationString = `${dias} dias, ${horas} horas, ${minutos} minutos`;
    return {
      ...reserv.toJSON(),
      dias: durationString
    };
  });
  reply.status(200).send(results);
}

// src/http/controllers/reserve/delete.ts
var import_zod4 = require("zod");

// src/use-cases/factory/category/make-delete-reserv-use-case.ts
function makeDeleteReservUseCase() {
  const reservRepository = new ReservRepository();
}

// src/http/controllers/reserve/delete.ts
async function deleteReserv(request, reply) {
  const querySchema = import_zod4.z.object({
    id: import_zod4.z.string()
  });
  const { id } = querySchema.parse(request.query);
  const deleteReservUseCase = makeDeleteReservUseCase();
  reply.status(200).send({ message: "Reserva deletada com sucesso e fonte atualizada." });
}

// src/http/controllers/reserve/validUpload.ts
var import_zod5 = require("zod");

// src/use-cases/reserv/valid-reserv.ts
var ValidUploadUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(dev) {
    return this.reservRepository.findValidUpload(dev);
  }
};

// src/use-cases/factory/reserv/make-valid-upload-reserv-use-case.ts
function makeValidUploadUseCase() {
  const reservRepository = new ReservRepository();
  return new ValidUploadUseCase(reservRepository);
}

// src/http/controllers/reserve/validUpload.ts
async function validUpload(request, reply) {
  const querySchema = import_zod5.z.object({
    dev: import_zod5.z.string()
  });
  const { dev } = querySchema.parse(request.query);
  const validUploadUseCase = makeValidUploadUseCase();
  const fontes = await validUploadUseCase.handler(dev);
  reply.status(200).send(fontes);
}

// src/http/controllers/reserve/route.ts
async function reservRoutes(app) {
  app.get("/reserv", getReserv);
  app.get("/reserv/:id/:prw", getReservByPrwAndId);
  app.delete("/reserv", deleteReserv);
  app.get("/reserv/validUpload", validUpload);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reservRoutes
});
