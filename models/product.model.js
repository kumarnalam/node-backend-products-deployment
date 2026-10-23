const mongoose = require('mongoose');


const products = new mongoose.Schema({
   product_name: {
     type: String,
     required: true,
     trim: true,
     lowercase: true,
     minlength: 2,
     maxlength: 50
   },
   product_code: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: 4,
    maxlength: 6
   },
   product_price: {
     type: Number,
     required: true,
     min: 1
   },
   product_size: {
    type: [String],
    enum: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
    required: true,
    validate: {
      validator: function (sizes) {
        return Array.isArray(sizes) && sizes.length > 0 && sizes.length <= 8;
      },
      message: 'product_size must contain 1 to 8 allowed size values'
    }
   },
  },
   {
    timestamps: true
   }
)

const product = mongoose.model("Product", products);

module.exports = product;