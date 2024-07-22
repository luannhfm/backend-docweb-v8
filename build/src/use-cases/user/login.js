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

// src/use-cases/user/login.ts
var login_exports = {};
__export(login_exports, {
  LoginUseCase: () => LoginUseCase
});
module.exports = __toCommonJS(login_exports);

// src/use-cases/errors/invalid-credentials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Invalid credentials");
    this.name = "InvalidCredentialsError";
  }
};

// src/use-cases/user/login.ts
var bcrypt = __toESM(require("bcryptjs"));
var LoginUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(login, password) {
    const user = await this.userRepository.findByLogin(login);
    if (!user) {
      throw new InvalidCredentialsError();
    }
    const isValid = await bcrypt.compare(password, user.senha);
    if (!isValid) {
      throw new InvalidCredentialsError();
    }
    return { login, admin: user.admin };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LoginUseCase
});
