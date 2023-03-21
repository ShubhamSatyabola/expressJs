const express = require('express');
const path = require('path');

const parser = require('body-parser');

const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactus = require('./routes/contactUs')

app.use(parser.urlencoded());

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactus)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
});

app.listen(3000);