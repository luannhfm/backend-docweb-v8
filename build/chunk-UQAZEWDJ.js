import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/source-table-field.entity.ts
import { Entity as Entity4, PrimaryGeneratedColumn as PrimaryGeneratedColumn4, Column as Column4, ManyToOne as ManyToOne3 } from "typeorm";

// src/entities/source-table.entity.ts
import { Entity as Entity3, PrimaryGeneratedColumn as PrimaryGeneratedColumn3, Column as Column3, ManyToOne as ManyToOne2, OneToMany as OneToMany2 } from "typeorm";

// src/entities/source.entity.ts
import { Entity as Entity2, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, Column as Column2, OneToMany } from "typeorm";

// src/entities/source-function.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
var SourceFunction = class {
};
__decorateClass([
  PrimaryGeneratedColumn()
], SourceFunction.prototype, "id", 2);
__decorateClass([
  Column("varchar")
], SourceFunction.prototype, "uuid", 2);
__decorateClass([
  Column("varchar")
], SourceFunction.prototype, "type", 2);
__decorateClass([
  Column("varchar")
], SourceFunction.prototype, "name", 2);
__decorateClass([
  Column("text")
], SourceFunction.prototype, "source", 2);
__decorateClass([
  Column("integer")
], SourceFunction.prototype, "line", 2);
__decorateClass([
  Column("integer")
], SourceFunction.prototype, "blankLines", 2);
__decorateClass([
  Column("integer")
], SourceFunction.prototype, "commentedLines", 2);
__decorateClass([
  ManyToOne(() => Source, (source) => source.sourceFunctions, { onDelete: "CASCADE" })
], SourceFunction.prototype, "sourceTxt", 2);
SourceFunction = __decorateClass([
  Entity("source_function")
], SourceFunction);

// src/entities/source.entity.ts
var Source = class {
};
__decorateClass([
  PrimaryGeneratedColumn2()
], Source.prototype, "id", 2);
__decorateClass([
  Column2("varchar")
], Source.prototype, "uuid", 2);
__decorateClass([
  Column2("varchar")
], Source.prototype, "label", 2);
__decorateClass([
  Column2("varchar")
], Source.prototype, "category", 2);
__decorateClass([
  Column2("varchar")
], Source.prototype, "name", 2);
__decorateClass([
  Column2("integer")
], Source.prototype, "tables", 2);
__decorateClass([
  Column2("integer")
], Source.prototype, "functions", 2);
__decorateClass([
  Column2("text")
], Source.prototype, "source", 2);
__decorateClass([
  Column2("integer")
], Source.prototype, "line", 2);
__decorateClass([
  Column2("integer")
], Source.prototype, "blankLines", 2);
__decorateClass([
  Column2("integer")
], Source.prototype, "commentedLines", 2);
__decorateClass([
  Column2("smallint")
], Source.prototype, "status", 2);
__decorateClass([
  Column2("boolean")
], Source.prototype, "reserv", 2);
__decorateClass([
  OneToMany(() => SourceFunction, (sourceFunction) => sourceFunction.source)
], Source.prototype, "sourceFunctions", 2);
__decorateClass([
  OneToMany(() => SourceTable, (sourceTable) => sourceTable.source)
], Source.prototype, "sourceTables", 2);
Source = __decorateClass([
  Entity2("source")
], Source);

// src/entities/source-table.entity.ts
var SourceTable = class {
};
__decorateClass([
  PrimaryGeneratedColumn3()
], SourceTable.prototype, "id", 2);
__decorateClass([
  Column3("varchar")
], SourceTable.prototype, "uuid", 2);
__decorateClass([
  Column3("varchar")
], SourceTable.prototype, "name", 2);
__decorateClass([
  ManyToOne2(() => Source, (source) => source.sourceTables, { onDelete: "CASCADE" })
], SourceTable.prototype, "source", 2);
__decorateClass([
  OneToMany2(() => SourceTableField, (sourceTableField) => sourceTableField.sourceTable)
], SourceTable.prototype, "sourceTableFields", 2);
SourceTable = __decorateClass([
  Entity3("source_table")
], SourceTable);

// src/entities/source-table-field.entity.ts
var SourceTableField = class {
};
__decorateClass([
  PrimaryGeneratedColumn4()
], SourceTableField.prototype, "id", 2);
__decorateClass([
  Column4("varchar")
], SourceTableField.prototype, "uuid", 2);
__decorateClass([
  Column4("varchar")
], SourceTableField.prototype, "name", 2);
__decorateClass([
  ManyToOne3(() => SourceTable, (sourceTable) => sourceTable.sourceTableFields, { onDelete: "CASCADE" })
], SourceTableField.prototype, "sourceTable", 2);
SourceTableField = __decorateClass([
  Entity4("source_table_field")
], SourceTableField);

export {
  SourceTableField,
  SourceTable,
  Source,
  SourceFunction
};
