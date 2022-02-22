/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
const db = require('../data/database');

class Palet {

  id;

  paletNumber;

  created_at;

  updated_at;

  constructor(obj) {
    this.id = obj.id;
    this.paletNumber = obj.paletNumber;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }
}

const dataPalet = {
  getAllPaletNumber: async () => {
    const sql = 'SELECT * FROM palet;'
    const result = db.db.prepare(sql).all();
    return result;
  },
  addPaletNumber: async (paletNumber) => {
    const sql =
      'INSERT INTO palet (paletNumber, created_at) VALUES ($1, $2) RETURNING *;';
    const today = Date.now();
    const result = db.db.prepare(sql).run({
			1: paletNumber,
			2: today
		});
		return result;
	},
	lastId: async () => {
    const sql ='SELECT MAX(id) FROM cdeManitou;';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
};

module.exports = {
  dataPalet,
}
