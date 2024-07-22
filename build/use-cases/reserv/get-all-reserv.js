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

// src/use-cases/reserv/get-all-reserv.ts
var get_all_reserv_exports = {};
__export(get_all_reserv_exports, {
  GetAllReservUseCase: () => GetAllReservUseCase
});
module.exports = __toCommonJS(get_all_reserv_exports);
var import_date_fns = require("date-fns");
var GetAllReservUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(page, pageSize) {
    const offset = (page - 1) * pageSize;
    const reservs = await this.reservRepository.findDistinctByFonte(pageSize, offset);
    const total = await this.reservRepository.countDistinctFonte();
    const hasNext = offset + reservs.length < total;
    return {
      data: reservs.map((reserv) => ({
        ...reserv,
        dias: this.calculateDays(reserv)
      })),
      total,
      hasNext
    };
  }
  calculateDays(reserv) {
    const dataIni = (0, import_date_fns.parse)(reserv.data_ini, "dd/MM/yyyy", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? (0, import_date_fns.parse)(reserv.data_fim, "dd/MM/yyyy", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    return (0, import_date_fns.differenceInDays)(dataFim, dataIni);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetAllReservUseCase
});
