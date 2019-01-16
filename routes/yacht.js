const express = require('express');

const yachtController = require('../controllers/yacht');

const router = express.Router();

router.get('/', yachtController.getIndex);

module.exports = router;