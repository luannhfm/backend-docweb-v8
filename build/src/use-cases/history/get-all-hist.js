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

// src/use-cases/history/get-all-hist.ts
var get_all_hist_exports = {};
__export(get_all_hist_exports, {
  GetFontesUseCase: () => GetFontesUseCase
});
module.exports = __toCommonJS(get_all_hist_exports);
var GetFontesUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(search) {
    return this.histRepository.findFontes(search);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetFontesUseCase
});
