const express = require('express');
// import express from express;
const authRouter = require('./routes/auth.route');
const productRoute = require('./routes/product.route')
const uploadrouter = require('./routes/upload.route')
const errorHandler = require('./middleware/error.middleware')
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
 
const app = express();

app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)) ;


app.use('/api/auth', authRouter);
app.use('/api/product', productRoute);
app.use('/api/upload', uploadrouter)


app.use(errorHandler);

module.exports = app;