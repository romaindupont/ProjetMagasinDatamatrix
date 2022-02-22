/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
const db = require('../data/database');

class Moq {

  id;

  id_ref;

  moq;

  created_at;

  updated_at;

  constructor(obj) {
    this.id = obj.id;
    this.id_ref = obj.id_ref;
    this.moq = obj.moq;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }
}

const dataMoq = {
  getAllMoq: async () => {
    const sql = 'SELECT * FROM moq;'
    const result = db.db.prepare(sql).all();
    return result;
  },
  addMoq: async (reference, body) => {
    const sql =
      'INSERT INTO moq (id_ref, moq, created_at) VALUES ($1, $2, $3) RETURNING *';
    const {
      moq
    } = body;
    const today = Date.now();
    const result = db.db.prepare(sql).run({
			1: reference,
			2: moq,
			3: today,
		});
		return result;
	},
	deleteMoq: async (id) => {
		const sql = 'DELETE FROM moq WHERE id=?';
		const result = db.db.prepare(sql).run(id);
    return result;
	},
	updateMoq: async (body, id) => {
		const sql = 'UPDATE moq SET id_ref=$1, moq=$2, updated_at=$3 WHERE id=$4';
    const {
      id_ref,
      moq,
    } = body;
    const today = Date.now();
    const result = db.db.prepare(sql).run({
			1: id_ref,
			2: moq,
			3: today,
			4: id
		});
    return result;
	},
	getOneMoq: async(id_ref) => {
		const sql = 'SELECT * FROM moq WHERE id_ref=?';
		const result = db.db.prepare(sql).get(id_ref);
    return result;
	},
	lastId: async () => {
    const sql ='SELECT MAX(id) FROM moq;';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
};

module.exports = {
  dataMoq,
}
