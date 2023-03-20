const express = require('express');

const parser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(parser.urlencoded());

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>page not found</h1>')
});

app.listen(3000);