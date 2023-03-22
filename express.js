const express = require('express');
const path = require('path');

const parser = require('body-parser');

const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactus = require('./routes/contactUs')
const errorcontroller = require('./controllers/product')
app.use(parser.urlencoded());

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactus)

app.use(errorcontroller.error);

app.listen(3000);