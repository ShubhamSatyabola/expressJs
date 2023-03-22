const express = require('express');

const router = express.Router();

const admingetcontroller = require('../controllers/product')
const adminpostcontroller = require('../controllers/product')
router.get('/add-product',admingetcontroller.adminget)
router.post('/product',adminpostcontroller.adminpost)

module.exports = router