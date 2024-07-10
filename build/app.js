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
Hist = __decorateClass([
  (0, import_typeorm2.Entity)("hist_source")
], Hist);

// src/entities/user.entity.ts
var import_typeorm3 = require("typeorm");
var bcrypt = __toESM(require("bcryptjs"));
var User = class {
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
};
__decorateClass([
  (0, import_typeorm3.PrimaryColumn)("uuid")
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
__decorateClass([
  (0, import_typeorm3.BeforeInsert)()
], User.prototype, "hashPassword", 1);
User = __decorateClass([
  (0, import_typeorm3.Entity)("users")
], User);

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
      throw new Error("Categoria j\xE1 existente.");
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
  const loginBodySchema = import_zod7.z.object({
    login: import_zod7.z.string(),
    password: import_zod7.z.string()
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

// src/app.ts
var import_cors = __toESM(require("@fastify/cors"));
var app = (0, import_fastify.default)();
app.register(import_cors.default, {
  origin: "*"
});
app.register(categoryRoutes);
app.register(histRoutes);
app.register(userRoutes);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
