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

// src/use-cases/reserv/get-reserv-by-source.ts
var get_reserv_by_source_exports = {};
__export(get_reserv_by_source_exports, {
  GetReservByPrwAndIdUseCase: () => GetReservByPrwAndIdUseCase
});
module.exports = __toCommonJS(get_reserv_by_source_exports);
var import_date_fns = require("date-fns");
var GetReservByPrwAndIdUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(prw, id) {
    const reservs = await this.reservRepository.findByPrwAndId(prw, id);
    return reservs.map((reserv) => ({
      ...reserv,
      dias: this.calculateDuration(reserv)
    }));
  }
  calculateDuration(reserv) {
    const dataIni = (0, import_date_fns.parse)(`${reserv.data_ini} ${reserv.hora}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns.parse)(`${reserv.data_fim} ${reserv.hora_fim || "00:00"}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const totalMinutes = (0, import_date_fns.differenceInMinutes)(dataFim, dataIni);
    const dias = Math.floor(totalMinutes / (24 * 60));
    const horas = Math.floor(totalMinutes % (24 * 60) / 60);
    const minutos = totalMinutes % 60;
    return `${dias} dias, ${horas} horas, ${minutos} minutos`;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetReservByPrwAndIdUseCase
});
