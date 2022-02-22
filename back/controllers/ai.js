const aiModels = require('../models/saveAi_models');

const aiController = {
  findAll: async (req, res) => {
    try {
      const aiList = await aiModels.datasaveAI.getAllSave();
      return res.status(201).json({
        aiList,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = aiController;
