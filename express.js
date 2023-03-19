
const express = require('express');
const parser = require('body-parser')
const app = express();
app.use(parser.urlencoded())
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button>send</button><form/>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/add-product')
})

app.listen(3000)