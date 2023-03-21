const express = require('express');
const path = require("path")


const router = express.Router();

const rootdir = require('../util/path')


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})
router.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/shop/')
})

module.exports = router