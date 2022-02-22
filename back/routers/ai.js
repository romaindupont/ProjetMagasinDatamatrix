const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai');

router.get('/list', aiController.findAll);

module.exports = router;
