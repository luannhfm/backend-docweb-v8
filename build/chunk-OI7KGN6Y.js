import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/user.entity.ts
import { Entity, Column, BeforeInsert, PrimaryColumn } from "typeorm";
import * as bcrypt from "bcryptjs";
var User = class {
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
};
__decorateClass([
  PrimaryColumn("uuid")
], User.prototype, "id", 2);
__decorateClass([
  Column({ type: "varchar" })
], User.prototype, "nome", 2);
__decorateClass([
  Column({ type: "varchar" })
], User.prototype, "email", 2);
__decorateClass([
  Column({ type: "varchar" })
], User.prototype, "senha", 2);
__decorateClass([
  Column({ type: "varchar" })
], User.prototype, "group", 2);
__decorateClass([
  Column({ type: "boolean" })
], User.prototype, "admin", 2);
__decorateClass([
  BeforeInsert()
], User.prototype, "hashPassword", 1);
User = __decorateClass([
  Entity("users")
], User);

export {
  User
};
