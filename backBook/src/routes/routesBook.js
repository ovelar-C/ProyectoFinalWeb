const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerBook');

router.get('/', controller.getAll);
router.get('/book' , controller.filter);

module.exports = router;