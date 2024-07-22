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

// src/entities/history.entity.ts
var history_entity_exports = {};
__export(history_entity_exports, {
  Hist: () => Hist
});
module.exports = __toCommonJS(history_entity_exports);
var import_typeorm = require("typeorm");
var Hist = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Hist.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Hist.prototype, "fonte", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Hist.prototype, "user", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Hist.prototype, "action", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], Hist.prototype, "commit", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], Hist.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm.Column)("text", { nullable: true })
], Hist.prototype, "sourceOld", 2);
Hist = __decorateClass([
  (0, import_typeorm.Entity)("hist_source")
], Hist);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Hist
});
