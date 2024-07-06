const path = require('path');

const express = require('express');

const router = express.Router();
const getProductController = require('../controllers/products.js')
router.get('/', getProductController.getproucts);

module.exports = router;