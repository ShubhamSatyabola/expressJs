const express = require('express');
const path = require('path');

const router = express.Router();

const rootdir = require('../util/path');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'));
})
router.post('/sucess',(req,res,next)=>{
    console.log(req.body)
    console.log('form sucessfully filled')
    res.redirect('/admin/add-product')
})
module.exports = router