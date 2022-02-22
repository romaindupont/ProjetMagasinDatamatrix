/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
const db = require('../data/database');

class CdeManitou {

  id;

  reference;

  customRef;

  quantity;

  dateNeed;

  numeroCde;

  created_at;

  updated_at;

  deliveryQuantity;

  moq_id;

  constructor(obj) {
    this.id = obj.id;
    this.reference = obj.reference;
    this.customRef = obj.customRef;
    this.quantity = obj.quantity;
    this.dateNeed = obj.dateNeed;
    this.numeroCde = obj.numeroCde;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
    this.deliveryQuantity = obj.deliveryQuantity;
    this.moq_id = obj.moq_id;
  }
}

const datacdeManitou = {
  getAllOrders: async () => {
    const sql = 'SELECT * FROM cdeManitou';
    const result = db.db.prepare(sql).all();
    return result;
  },
  addOrderLine: async (body, id, customRef) => {
    const sql =
      'INSERT INTO cdeManitou (reference, customRef, quantity, dateNeed, numeroCde, created_at, deliveryQuantity, moq_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const {
      reference,
      quantity,
      dateNeed,
      numeroCde,
    } = body;
    const deliveryQuantity = 0;
    const today = Date.now();
    const year = dateNeed.substring(6);
    const month = dateNeed.substring(5,3);
    const day = dateNeed.substring(0,2);
    const date = Date.parse(`${year}-${month}-${day}`);
    const result = db.db.prepare(sql).run({
			1: reference,
			2: customRef,
			3: quantity,
			4: date,
			5: numeroCde,
			6: today,
			7: deliveryQuantity,
			8: id
		});
		return result;
	},
	deleteOrder: async (id) => {
		const sql = 'DELETE FROM cdeMAnitou WHERE id=?';
		const result = db.db.prepare(sql).run(id);
    return result;
	},
	updateOrder: async (body, id) => {
		const sql = 'UPDATE cdeManitou SET reference=$1, customRef=$2, quantity=$3, dateNeed=$4, numeroCde=$5, updated_at=$6, deliveryQuantity=$7 WHERE id=$8';
    const {
      reference,
      customRef,
      quantity,
      dateNeed,
      numeroCde,
      deliveryQuantity,
    } = body;
    const today = Date.now();
    const result = db.db.prepare(sql).run({
			1: reference,
			2: customRef,
			3: quantity,
			4: dateNeed,
			5: numeroCde,
			6: today,
			7: deliveryQuantity,
			8: id
		});
    return result;
	},
	getOneLineOrder: async(id) => {
		const sql = 'SELECT * FROM cdeManitou WHERE id=?';
		const result = db.db.prepare(sql).get(id);
    return result;
	},
	updateDeliveryQ: async(id, qDelivery) => {
		const sql = 'UPDATE cdeManitou SET deliveryQuantity=$1, updated_at=$2 WHERE id=$3';
		const today = Date.now();
		const result = db.db.prepare(sql).run({
			1: qDelivery,
			2: today,
			3: id,
		});
    return result;
	},
	lastId: async () => {
    const sql ='SELECT MAX(id) FROM cdeManitou';
    const result = await db.db.prepare(sql).get();
    const id = result.rows[0];
    return id;
  },
  getSpecificOrdersDate: async(body) => {
		const sql = 'SELECT * FROM cdeManitou WHERE dateNeed=?';
    const {
      dateNeed,
    } = body;
    const year = dateNeed.substring(6);
    const month = dateNeed.substring(5,3);
    const day = dateNeed.substring(0,2);
    const date = Date.parse(`${year}-${month}-${day}`);
		const result = db.db.prepare(sql).all(date);
    return result;
	},
};

module.exports = {
  datacdeManitou,
}
