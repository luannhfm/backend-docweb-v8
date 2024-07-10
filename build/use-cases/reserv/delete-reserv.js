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

// src/use-cases/reserv/delete-reserv.ts
var delete_reserv_exports = {};
__export(delete_reserv_exports, {
  DeleteReservUseCase: () => DeleteReservUseCase
});
module.exports = __toCommonJS(delete_reserv_exports);
var DeleteReservUseCase = class {
  constructor(reservRepository, sourceRepository) {
    this.reservRepository = reservRepository;
    this.sourceRepository = sourceRepository;
  }
  async handler(id) {
    const reserv = await this.reservRepository.findById(id);
    if (!reserv) {
      throw new Error("Registro n\xE3o encontrado.");
    }
    const source = await this.sourceRepository.findByName(reserv.fonte);
    if (!source) {
      throw new Error("Fonte n\xE3o encontrada na tabela Source.");
    }
    await this.sourceRepository.updateReservStatus(reserv.fonte, false);
    await this.reservRepository.deleteById(id);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteReservUseCase
});
