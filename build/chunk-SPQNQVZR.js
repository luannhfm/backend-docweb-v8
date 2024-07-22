import {
  appDataSource
} from "./chunk-OZ52BTMV.js";
import {
  Hist
} from "./chunk-FPN6SEXW.js";

// src/repositories/typeorm/history.repository.ts
var HistRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Hist);
  }
  async findByFonte(fonte) {
    return this.repository.find({ where: { fonte }, order: { id: "DESC" } });
  }
  async findFontes(search) {
    const query = this.repository.createQueryBuilder("hist").select("fonte").groupBy("fonte").orderBy("fonte", "ASC");
    if (search) {
      query.where("LOWER(hist.fonte) LIKE :search", { search: `%${search.toLowerCase()}%` });
    }
    return query.getRawMany();
  }
};

export {
  HistRepository
};
