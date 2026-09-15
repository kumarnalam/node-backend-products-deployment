const product = require("../models/product.model");

const createProduct = async (productname, code, price, size) => {
    console.log(productname, code, price, size);

    const existedProduct = await product.findOne({
        product_name: productname,
        product_code: code
    });

    if (existedProduct) {
        throw new Error('Product already exists with this code or name');
    }

    const newProduct = await product.create({
        product_name: productname,
        product_code: code,
        product_price: price,
        product_size: size
    });

    return newProduct;
};

const editProduct = async (obj, id) => {
    
        const editProductIndex = await product.findById(id);

        if(!editProductIndex) {
            throw new Error('Product is not found based your ID');
        }

        const productUpdated = await product.findByIdAndUpdate(id, obj, {
          new: true,
        });

        return productUpdated;
   
}

const deleteProduct = async (id) => {
    
   

        

        const productDeleted = await product.findByIdAndDelete(id);

        if(!productDeleted) {
            throw new Error('Product is not found based your ID');
        }

        return id;
   
}

const getAllProduct = async() => {
   const list = await product.find();

   return list
}

module.exports = { createProduct, editProduct, deleteProduct, getAllProduct };