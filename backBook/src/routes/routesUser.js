const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUser');

router.get('/', controller.getAll);
router.post('/login', controller.signIn);
router.post('/register', controller.registerUser);

module.exports = router;