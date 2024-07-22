import {
  appDataSource
} from "./chunk-OZ52BTMV.js";
import {
  Reserv
} from "./chunk-YLSXZO53.js";

// src/repositories/typeorm/reserv.repository.ts
var ReservRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Reserv);
  }
  async findByFonte(fonte, offset, limit) {
    return this.repository.find({
      where: { fonte },
      order: { createdAt: "DESC" },
      skip: offset,
      take: limit
    });
  }
  async countDistinctFonte() {
    const result = await this.repository.query(`SELECT COUNT(DISTINCT fonte) as count FROM reserv`);
    return result[0].count;
  }
  async findByPrw(prw) {
    return this.repository.find({
      where: { fonte: prw },
      order: { createdAt: "DESC" }
    });
  }
  async findById(id) {
    return this.repository.findOne({ where: { id } });
  }
  async deleteById(id) {
    await this.repository.delete(id);
  }
  async updateFonteReservStatus(fonte, status) {
    await this.repository.query(
      `UPDATE source SET reserv = $1 WHERE name = $2`,
      [status, fonte]
    );
  }
  async findValidUpload(dev) {
    return this.repository.find({
      where: {
        dev,
        data_fim: ""
      }
    });
  }
};

export {
  ReservRepository
};
