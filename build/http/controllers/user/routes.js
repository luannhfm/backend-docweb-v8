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

// src/http/controllers/user/routes.ts
var routes_exports = {};
__export(routes_exports, {
  userRoutes: () => userRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/http/controllers/user/login.ts
var import_zod2 = require("zod");

// src/entities/user.entity.ts
var import_typeorm = require("typeorm");
var bcrypt = __toESM(require("bcryptjs"));
var User = class {
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryColumn)("uuid")
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "varchar" })
], User.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "varchar" })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "varchar" })
], User.prototype, "senha", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "varchar" })
], User.prototype, "group", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "boolean" })
], User.prototype, "admin", 2);
__decorateClass([
  (0, import_typeorm.BeforeInsert)()
], User.prototype, "hashPassword", 1);
User = __decorateClass([
  (0, import_typeorm.Entity)("users")
], User);

// src/lib/typeorm/typeorm.ts
var import_typeorm4 = require("typeorm");

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

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm4.DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Category, Hist, User],
  //migrations: [ProductAutoGenerateUUID1719264459763],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log(`Database with typeorm started at port #${env.DATABASE_PORT}`);
}).catch(() => {
  console.error(`Error connecting to database with typeorm, ${import_console.error}`);
});

// src/repositories/typeorm/user.repository.ts
var UserRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(User);
  }
  async findByLogin(login2) {
    return this.repository.findOne({ where: { id: login2 } });
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

// src/use-cases/user/login.ts
var bcrypt2 = __toESM(require("bcryptjs"));
var LoginUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(login2, password) {
    const user = await this.userRepository.findByLogin(login2);
    if (user) {
      const isValid = await bcrypt2.compare(password, user.senha);
      if (isValid) {
        return { user: login2, admin: user.admin };
      } else {
        throw new Error("Senha incorreta!");
      }
    } else {
      throw new Error("Usu\xE1rio n\xE3o encontrado!");
    }
  }
};

// src/use-cases/factory/user/make-login-use-case.ts
function makeLoginUseCase() {
  const userRepository = new UserRepository();
  return new LoginUseCase(userRepository);
}

// src/http/controllers/user/login.ts
async function login(request, reply) {
  const loginBodySchema = import_zod2.z.object({
    login: import_zod2.z.string(),
    password: import_zod2.z.string()
  });
  const { login: login2, password } = loginBodySchema.parse(request.body);
  const loginUseCase = makeLoginUseCase();
  try {
    const result = await loginUseCase.handler(login2, password);
    reply.status(201).send(result);
  } catch (error2) {
    reply.status(401).send({ message: error2.message });
  }
}

// src/http/controllers/user/createUser.ts
var import_zod3 = require("zod");

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
  const createUserBodySchema = import_zod3.z.object({
    id: import_zod3.z.string(),
    nome: import_zod3.z.string(),
    email: import_zod3.z.string(),
    secretkey: import_zod3.z.string(),
    group: import_zod3.z.string(),
    admin: import_zod3.z.boolean()
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
var import_zod4 = require("zod");

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
  const paramsSchema = import_zod4.z.object({
    id: import_zod4.z.string()
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
var import_zod5 = require("zod");

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
  const paramsSchema = import_zod5.z.object({
    id: import_zod5.z.string()
  });
  const bodySchema = import_zod5.z.object({
    nome: import_zod5.z.string().optional(),
    email: import_zod5.z.string().optional(),
    secretkey: import_zod5.z.string().optional()
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
async function userRoutes(app) {
  app.post("/login", login);
  app.post("/users", createUser);
  app.get("/users", getAllUsers);
  app.delete("/users/:id", deleteUser);
  app.post("/users/:id", updateUser);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRoutes
});
