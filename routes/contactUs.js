const express = require('express');


const router = express.Router();

const contactusgetcontroller = require('../controllers/product')
const contactuspostcontroller = require('../controllers/product')


router.get('/contactus',contactusgetcontroller.contactusget)
router.post('/sucess',contactuspostcontroller.contactuspost)

module.exports = router