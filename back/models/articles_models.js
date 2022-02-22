/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
const db = require('../data/database');

class Articles {

  CodeB;

  reference;

  designation;

  famille;

  substitution;

  nomenclature;

  fabricant;

  date_creation;

  statut;

  misesurmarche;

  infos_diverses;

  estimation_annee;

  Rohs;

  Reach;

  ML;

  origine;

  date_maj;

  Halogen;

  Suivi;

  refachat;

  skmini;

  visuel;

  constructor(obj) {
    this.CodeB = obj.CodeB;
    this.reference = obj.reference;
    this.designation = obj.designation;
    this.famille = obj.famille;
    this.substitution = obj.substitution;

    this.nomenclature = obj.nomenclature;
    this.fabricant = obj.fabricant;
    this.date_creation = obj.date_creation;
    this.statut = obj.statut;
    this.misesurmarche = obj.misesurmarche;
    this.infos_diverses = obj.infos_diverses;
    this.estimation_annee = obj.estimation_annee;
    this.Rohs = obj.Rohs;
    this.Reach = obj.Reach;
    this.ML = obj.ML;
    this.origine = obj.origine;
    this.date_maj = obj.date_maj;
    this.Halogen = obj.Halogen;
    this.Suivi = obj.Suivi;
    this.refachat = obj.refachat;
    this.skmini = obj.skmini;
    this.visuel = obj.visuel;

  }
}

const dataArticles = {
  getRefId: async (reference) => {
    const sql = 'SELECT * FROM articles WHERE reference=?';
    const result = db.db.prepare(sql).get(reference);
    return result;
  },
};

module.exports = {
  dataArticles,
}
