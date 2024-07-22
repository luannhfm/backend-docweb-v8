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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/entities/reserv.entity.ts
var reserv_entity_exports = {};
__export(reserv_entity_exports, {
  Reserv: () => Reserv
});
module.exports = __toCommonJS(reserv_entity_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Reserv
});
