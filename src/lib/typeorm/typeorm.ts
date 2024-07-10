import { DataSource } from "typeorm";
import { env } from "@/env";
import { error } from "console";
import { Category } from "@/entities/category.entity";
import { Hist } from "@/entities/history.entity";
import { User } from "@/entities/user.entity";
export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: [Category, Hist, User ],
    //migrations: [ProductAutoGenerateUUID1719264459763],
    logging: env.NODE_ENV === "development",
  });

  appDataSource
  .initialize()
  .then(() => {
    console.log(`Database with typeorm started at port #${env.DATABASE_PORT}`);
  })
  .catch(() => {
    console.error(`Error connecting to database with typeorm, ${error}`);
  });