import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/analysis.entity.ts
import { Entity, PrimaryColumn, Column } from "typeorm";
var Analysis = class {
};
__decorateClass([
  PrimaryColumn({ type: "varchar" })
], Analysis.prototype, "id_analysis", 2);
__decorateClass([
  Column({ type: "json" })
], Analysis.prototype, "analysis", 2);
__decorateClass([
  Column({ type: "varchar" })
], Analysis.prototype, "status", 2);
Analysis = __decorateClass([
  Entity("analysis")
], Analysis);

export {
  Analysis
};
