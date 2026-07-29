const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerBook');

router.get('/', controller.getAll);
router.post('/register', controller.agregarBook);

module.exports = router;