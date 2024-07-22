import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/history.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
var Hist = class {
};
__decorateClass([
  PrimaryGeneratedColumn()
], Hist.prototype, "id", 2);
__decorateClass([
  Column("varchar")
], Hist.prototype, "fonte", 2);
__decorateClass([
  Column("varchar")
], Hist.prototype, "user", 2);
__decorateClass([
  Column("varchar")
], Hist.prototype, "action", 2);
__decorateClass([
  Column("varchar")
], Hist.prototype, "commit", 2);
__decorateClass([
  Column("text")
], Hist.prototype, "source", 2);
__decorateClass([
  Column("text", { nullable: true })
], Hist.prototype, "sourceOld", 2);
Hist = __decorateClass([
  Entity("hist_source")
], Hist);

export {
  Hist
};
