
const express = require('express');

const router = express.Router();

const shopcontroller = require('../controllers/product')

router.get('/',shopcontroller.shopget)

module.exports = router