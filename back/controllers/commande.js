/* eslint-disable no-plusplus */
const fs = require('fs');
const Papa = require('papaparse');
const paletModels = require('../models/palet_models');
const saveAiModels = require('../models/saveAi_models');
const commandeModels = require('../models/cdeManitou_models');
const articlesModels = require('../models/articles_models');
const moqModels = require('../models/moq_models');

const commandeController = {
  add: async (req, res) => {
    try {
      const id_ref = await moqModels.dataMoq.getOneMoq(req.body.reference);
      const verifyCode = await articlesModels.dataArticles.getRefId(
        req.body.reference
      );
      const {date_creation} = verifyCode;
      const customRef = date_creation + '/' + req.body.reference;
      let newOrder;
      if (id_ref === undefined) {
        const newId = null;
        newOrder = await commandeModels.datacdeManitou.addOrderLine(req.body, newId, customRef);
      } else {
        const { id } = id_ref;
        newOrder = await commandeModels.datacdeManitou.addOrderLine(req.body, id, customRef);
      }
      return res.status(201).json({
        message: 'Nouvelle ligne enregistrée',
        newOrder,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const orderList = await commandeModels.datacdeManitou.getAllOrders();
      return res.status(201).json({
        orderList,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      await commandeModels.datacdeManitou.deleteOrder(req.params.id);
      return res.status(201).json({
        message: 'La ligne est supprimée',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getOneLine: async (req, res) => {
    try {
      const orderLine = await commandeModels.datacdeManitou.getOneLineOrder(
        req.params.id
      );
      return res.status(201).json({
        orderLine,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  save: async (req, res) => {
    try {
      await commandeModels.datacdeManitou.updateDeliveryQ(
        req.params.id,
        req.body.qDelivery
      );
      const newPaletNumber = await paletModels.dataPalet.addPaletNumber(
        req.body.paletNumber
      );
      const newIdPalet = newPaletNumber.lastInsertRowid;
      const AILength = req.body.list.length;
      for (let i = 0; i < AILength; i++) {
        saveAiModels.datasaveAI.addSaveLine(req.body.list[i], newIdPalet);
      }
      return res.status(201).json({
        message: 'La ligne est sauvegardée',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  transform: async (req, res) => {
    try {
      const filePath = req.body.ordersPath;
      const csv = fs.readFileSync(filePath, 'utf-8');
      const csvJson = Papa.parse(csv, { encoding: 'utf-8' });
      return res.status(201).json({
        message: 'Nouveau csv',
        csvJson,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  verify: async (req, res) => {
    try {
      const verifyCode = await articlesModels.dataArticles.getRefId(
        req.params.reference
      );
      let reponse;
      let correctCode;
      if (verifyCode === undefined) {
        reponse = 'notGood';
        correctCode = false;
      } else {
        reponse = 'good';
        correctCode = true;
      }
      return res.status(201).json({
        message: reponse,
        correctCode,
        verifyCode,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  findSpecificDate: async (req, res) => {
    try {
      const listOfOrder =
        await commandeModels.datacdeManitou.getSpecificOrdersDate(req.body);
      return res.status(201).json({
        listOfOrder,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  update: async (req, res) => {
    try {
      await commandeModels.datacdeManitou.updateOrder(req.body, req.params.id);
      return res.status(201).json({
        message: 'Ligne commande mise à jour',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = commandeController;
