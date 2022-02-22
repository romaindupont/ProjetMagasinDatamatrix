/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
const db = require('../data/database');

class saveAI {

  id;

  id_ref;

  ai;

  refManitou;

  dateFlash;

  id_palet;

  constructor(obj) {
    this.id = obj.id;
    this.id_ref = obj.id_ref;
    this.ai = obj.ai;
    this.refManitou = obj.refManitou;
    this.dateFlash = obj.dateFlash;
    this.id_palet = obj.id_palet;
  }
}

const datasaveAI = {
  getAllSave: async () => {
    const sql = 'SELECT saveAI.id as id, saveAI.referenceHq, saveAI.ai, saveAI.refManitou, saveAI.dateFlash, palet.paletNumber, saveAI.dateFlash FROM saveAI INNER JOIN palet ON saveAI.id_palet = palet.id;'
    const result = db.db.prepare(sql).all();
    return result;
  },
  addSaveLine: async (body, newIdPalet) => {
    const sql =
      'INSERT INTO saveAI (referenceHq, ai, refManitou, dateFlash, id_palet) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
      const referenceHq =  body.reference.substring(26);
      const ai = body.reference.substring(0, 16);
      const refManitou = body.reference.substring(17, 25);
    const today = Date.now();
    const result = db.db.prepare(sql).run({
			1: referenceHq,
			2: ai,
			3: refManitou,
			4: today,
			5: newIdPalet
		});
		return result;
	},
	getOneSave: async(id) => {
		const sql = 'SELECT * FROM saveAI WHERE id=?;';
		const result = db.db.prepare(sql).run(id);
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
  datasaveAI,
}
