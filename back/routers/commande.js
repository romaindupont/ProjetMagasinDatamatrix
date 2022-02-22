const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande');

router.post('/add', commandeController.add);
router.get('/list', commandeController.findAll);
router.post('/listDate', commandeController.findSpecificDate);
router.delete('/delete/:id', commandeController.delete);
router.get('/:id', commandeController.getOneLine);
router.post('/save/:id', commandeController.save);
router.post('/import', commandeController.transform);
router.get('/verify/:reference', commandeController.verify);
router.patch('/update/:id', commandeController.update);
module.exports = router;
