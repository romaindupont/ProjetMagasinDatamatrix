const express = require('express');
const router = express.Router();
const moqController = require('../controllers/moq');

router.post('/add/:reference', moqController.add);
router.get('/list', moqController.findAll);
router.delete('/delete/:id', moqController.delete);
router.put('/update/:id', moqController.update);

module.exports = router;
