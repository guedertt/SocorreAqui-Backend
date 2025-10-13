const express = require('express');
const router = express.Router();
const contatosController = require('../controllers/contatosController');

router.get('/', contatosController.listAll);
router.get('/:id', contatosController.getOne);

module.exports = router;
