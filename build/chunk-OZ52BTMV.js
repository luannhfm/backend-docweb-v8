import {
  User
} from "./chunk-OI7KGN6Y.js";
import {
  env
} from "./chunk-EWPIP2Y5.js";
import {
  Analysis
} from "./chunk-A4CQ4RPY.js";
import {
  Category
} from "./chunk-DLZUWCNE.js";
import {
  Hist
} from "./chunk-FPN6SEXW.js";

// src/lib/typeorm/typeorm.ts
import { DataSource } from "typeorm";
import { error } from "console";
var appDataSource = new DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Category, Hist, User, Analysis],
  migrations: ["src/lib/typeorm/migrations/*.ts"],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log(`Database with typeorm started at port #${env.DATABASE_PORT}`);
}).catch(() => {
  console.error(`Error connecting to database with typeorm, ${error}`);
});

export {
  appDataSource
};
