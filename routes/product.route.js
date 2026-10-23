const express = require('express');
const authvalidateToken = require("../middleware/auth.middleware");
const { createProductHandlerController, editProductHandlerController, deleteProductHandlerController, getAllProductsHandlerController } = require('../controllers/product.controller');

const productRoute = express.Router();


/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Get all products
 *     tags: [products]
 *     responses:
 *       200:
 *         description: Products retrieved successfully
 */




productRoute.post('/create', authvalidateToken, createProductHandlerController);

productRoute.put('/edit/:id', authvalidateToken, editProductHandlerController);

productRoute.delete('/delete/:id', authvalidateToken, deleteProductHandlerController);

productRoute.get('/allproducts', authvalidateToken, getAllProductsHandlerController);


module.exports = productRoute;

