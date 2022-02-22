const moqModels = require('../models/moq_models');
const articlesModels = require('../models/articles_models');

const moqController = {
  add: async (req, res) => {
    try {
      const findRef = await articlesModels.dataArticles.getRefId(
        req.params.reference
      );
      const { reference } = findRef;
      const newMoq = await moqModels.dataMoq.addMoq(reference, req.body);
      return res.status(201).json({
        message: 'Nouveau Moq enregistré',
        newMoq,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const moqList = await moqModels.dataMoq.getAllMoq();
      return res.status(201).json({
        moqList,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      await moqModels.dataMoq.deleteMoq(req.params.id);
      return res.status(201).json({
        message: 'La ligne est supprimée',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  update: async (req, res) => {
    try {
      await moqModels.dataMoq.updateMoq(req.body, req.params.id);
      return res.status(201).json({
        message: 'La ligne est mise à jour',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = moqController;
