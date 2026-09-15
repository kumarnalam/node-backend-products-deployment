const express = require('express');
const authvalidateToken = require("../middleware/auth.middleware");
const { createProductHandlerController, editProductHandlerController, deleteProductHandlerController, getAllProductsHandlerController } = require('../controllers/product.controller');

const productRoute = express.Router();




productRoute.post('/create', authvalidateToken, createProductHandlerController);

productRoute.put('/edit/:id', authvalidateToken, editProductHandlerController);

productRoute.delete('/delete/:id', authvalidateToken, deleteProductHandlerController);

productRoute.get('/allproducts', authvalidateToken, getAllProductsHandlerController);


module.exports = productRoute;
