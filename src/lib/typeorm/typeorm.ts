import { DataSource } from "typeorm";
import { env } from "@/env";
import { error } from "console";
import { Category } from "@/entities/category.entity";
import { Hist } from "@/entities/history.entity";
import { User } from "@/entities/user.entity";
import { Analysis } from "@/entities/analysis.entity";
import { Source } from "@/entities/source.entity";
import { Reserv } from "@/entities/reserv.entity";
import { SourceFunction } from "@/entities/source-function.entity";
import { SourceTable } from "@/entities/source-table.entity";
import { SourceTableField } from "@/entities/source-table-field.entity";
import { AnalysisResult } from "@/entities/analysis-result.entity";
import { AttentionPoint } from "@/entities/attention-point.entity";
import { Difference } from "@/entities/difference.entity";
import { Analysis1721666809328 } from "./migrations/1721664573842-analysis";

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: [Category, 
               Hist, User, 
                Analysis , Source, 
                SourceFunction, SourceTable, 
                SourceTableField,
                Reserv , AnalysisResult, AttentionPoint, Difference ],
    migrations: [Analysis1721666809328],

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