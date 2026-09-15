const {createProduct, editProduct, deleteProduct, getAllProduct} = require("../services/product.service");

const createProductHandlerController = async (req, res) => {
     try {
          //console.log(req.body);
          const product = await createProduct(req.body.product_name, req.body.product_code, req.body.product_price, req.body.product_size);

     res.status(201).json({
          message: "Product created successfull",
          product: product
     })
     } catch(err) {
        res.status(400).json({
          message: err.message
        })
     }
};

const editProductHandlerController = async (req, res)=> {
     try {

          const product = await editProduct(req.body, req.params.id);

          res.status(201).json({
          message: "Product Updated Successfull",
          product: product
     })

     } catch(err) {
          res.status(400).json({
               message: err.message
          })
     }
}

const deleteProductHandlerController = async (req, res)=> {
     try {
          // console.log(req.params.id);
          const product = await deleteProduct(req.params.id);

          // console.log(product);

          res.status(200).json({
          message: "Product Deleted Successfull",
          product_id: product
     })

     } catch(err) {
          res.status(400).json({
               message: err.message
          })
     }
}

const getAllProductsHandlerController = async (req, res)=> {
     try {

          const products = await getAllProduct();

          res.status(201).json({
          message: "Product Deleted Successfull",
          list: products.length > 0 ? products : []
     })

     } catch(err) {
          res.status(400).json({
               message: err.message
          })
     }
}

module.exports = { createProductHandlerController, editProductHandlerController, deleteProductHandlerController, getAllProductsHandlerController }