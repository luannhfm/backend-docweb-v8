import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/reserv.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
var Reserv = class {
  static create(arg0) {
    throw new Error("Method not implemented.");
  }
  toJSON() {
    throw new Error("Method not implemented.");
  }
};
__decorateClass([
  PrimaryGeneratedColumn()
], Reserv.prototype, "id", 2);
__decorateClass([
  Column("varchar")
], Reserv.prototype, "fonte", 2);
__decorateClass([
  Column("varchar")
], Reserv.prototype, "dev", 2);
__decorateClass([
  Column("varchar")
], Reserv.prototype, "data_ini", 2);
__decorateClass([
  Column("varchar")
], Reserv.prototype, "hora", 2);
__decorateClass([
  Column("varchar", { nullable: true })
], Reserv.prototype, "data_fim", 2);
__decorateClass([
  Column("varchar", { nullable: true })
], Reserv.prototype, "hora_fim", 2);
__decorateClass([
  Column("text")
], Reserv.prototype, "source_ori", 2);
__decorateClass([
  Column("text", { nullable: true })
], Reserv.prototype, "source_dev", 2);
__decorateClass([
  CreateDateColumn()
], Reserv.prototype, "createdAt", 2);
__decorateClass([
  UpdateDateColumn()
], Reserv.prototype, "updatedAt", 2);
Reserv = __decorateClass([
  Entity("reserv")
], Reserv);

export {
  Reserv
};
