import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/category.entity.ts
import { Entity, PrimaryColumn, Column } from "typeorm";
var Category = class {
};
__decorateClass([
  PrimaryColumn("varchar")
], Category.prototype, "category", 2);
__decorateClass([
  Column("varchar")
], Category.prototype, "content", 2);
Category = __decorateClass([
  Entity("category")
], Category);

export {
  Category
};
