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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/entities/source-table-field.entity.ts
var source_table_field_entity_exports = {};
__export(source_table_field_entity_exports, {
  SourceTableField: () => SourceTableField
});
module.exports = __toCommonJS(source_table_field_entity_exports);
var import_typeorm4 = require("typeorm");

// src/entities/source-table.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/source.entity.ts
var import_typeorm2 = require("typeorm");

// src/entities/source-function.entity.ts
var import_typeorm = require("typeorm");
var SourceFunction = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], SourceFunction.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("uuid")
], SourceFunction.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], SourceFunction.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar")
], SourceFunction.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], SourceFunction.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], SourceFunction.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => Source, (source) => source.Functions, { onDelete: "CASCADE" })
], SourceFunction.prototype, "Source", 2);
SourceFunction = __decorateClass([
  (0, import_typeorm.Entity)("source_function")
], SourceFunction);

// src/entities/source.entity.ts
var Source = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)()
], Source.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)("uuid")
], Source.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Source.prototype, "label", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Source.prototype, "category", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar")
], Source.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)("int")
], Source.prototype, "tables", 2);
__decorateClass([
  (0, import_typeorm2.Column)("int")
], Source.prototype, "functions", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Source.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm2.Column)("int")
], Source.prototype, "line", 2);
__decorateClass([
  (0, import_typeorm2.Column)("int")
], Source.prototype, "blankLines", 2);
__decorateClass([
  (0, import_typeorm2.Column)("int")
], Source.prototype, "commentedLines", 2);
__decorateClass([
  (0, import_typeorm2.Column)("smallint", { default: 0 })
], Source.prototype, "status", 2);
__decorateClass([
  (0, import_typeorm2.Column)("boolean")
], Source.prototype, "reserv", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)(() => SourceFunction, (sourceFunction) => sourceFunction.Source)
], Source.prototype, "Functions", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)(() => SourceTable, (sourceTable) => sourceTable.source)
], Source.prototype, "Tables", 2);
Source = __decorateClass([
  (0, import_typeorm2.Entity)("source")
], Source);

// src/entities/source-table.entity.ts
var SourceTable = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)()
], SourceTable.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)("uuid")
], SourceTable.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm3.Column)("varchar")
], SourceTable.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.ManyToOne)(() => Source, (source) => source.Tables, { onDelete: "CASCADE" })
], SourceTable.prototype, "source", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)(() => SourceTableField, (sourceTableField) => sourceTableField.sourceTable)
], SourceTable.prototype, "fields", 2);
SourceTable = __decorateClass([
  (0, import_typeorm3.Entity)("source_table")
], SourceTable);

// src/entities/source-table-field.entity.ts
var SourceTableField = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryGeneratedColumn)()
], SourceTableField.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)("uuid")
], SourceTableField.prototype, "uuid", 2);
__decorateClass([
  (0, import_typeorm4.Column)("varchar")
], SourceTableField.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm4.ManyToOne)(() => SourceTable, (sourceTable) => sourceTable.fields, { onDelete: "CASCADE" })
], SourceTableField.prototype, "sourceTable", 2);
SourceTableField = __decorateClass([
  (0, import_typeorm4.Entity)("source_table_field")
], SourceTableField);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SourceTableField
});
