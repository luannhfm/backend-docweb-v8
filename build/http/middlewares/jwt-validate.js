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

// src/http/middlewares/jwt-validate.ts
var jwt_validate_exports = {};
__export(jwt_validate_exports, {
  validateJwt: () => validateJwt
});
module.exports = __toCommonJS(jwt_validate_exports);
async function validateJwt(request, reply) {
  try {
    const routeFreeList = ["POST-/login"];
    const validateRoute = `${request.method}-${request.routerPath}`;
    if (routeFreeList.includes(validateRoute)) return;
    console.log("Token recebido no cabe\xE7alho:", request.headers.authorization);
    await request.jwtVerify();
    console.log("Token validado com sucesso");
  } catch (error) {
    console.error("Erro na valida\xE7\xE3o do token:", error);
    reply.status(401).send({ message: "Unauthorized" });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateJwt
});