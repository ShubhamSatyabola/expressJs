const path = require("path")
const rootdir = require('../util/path')
exports.adminget=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}

exports.adminpost=(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/shop/')
}

exports.contactusget=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'));
}
exports.contactuspost=(req,res,next)=>{
    console.log(req.body)
    console.log('form sucessfully filled')
    res.redirect('/admin/add-product')
}

exports.shopget=(req,res,next)=>{
    
    res.sendFile(path.join(rootdir,'views','shop.html'))
}

exports.error=(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
}