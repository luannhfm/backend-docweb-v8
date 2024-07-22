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

// src/use-cases/source/reserv-source.ts
var reserv_source_exports = {};
__export(reserv_source_exports, {
  ReservSourceUseCase: () => ReservSourceUseCase
});
module.exports = __toCommonJS(reserv_source_exports);
var ReservSourceUseCase = class {
  constructor(sourceRepository, reservRepository) {
    this.sourceRepository = sourceRepository;
    this.reservRepository = reservRepository;
  }
  async handler({ prw, user }) {
    const sourceRecord = await this.sourceRepository.findByPrw(prw);
    if (!sourceRecord) {
      throw new Error("Nenhum registro encontrado no Source.");
    }
    const sourceOri = sourceRecord.source;
    await this.sourceRepository.update(prw, { reserv: true });
    const currentDate = /* @__PURE__ */ new Date();
    const dataIni = currentDate.toLocaleDateString("pt-BR");
    const hora = currentDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    await this.reservRepository.create({
      fonte: prw,
      dev: user,
      data_ini: dataIni,
      hora,
      source_ori: sourceOri,
      source_dev: "",
      data_fim: "",
      hora_fim: ""
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReservSourceUseCase
});
