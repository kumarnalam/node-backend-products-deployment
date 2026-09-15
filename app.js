const express = require('express');
const authRouter = require('./routes/auth.route');
const productRoute = require('./routes/product.route')
 
const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/product', productRoute);

module.exports = app;