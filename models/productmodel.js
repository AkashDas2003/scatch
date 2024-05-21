const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  image: String,
  price: Number,
  name: String,
  discount: { type: Number, default: 0 },
  bgcolor: String,
  panalcolor: String,
  textcolor: String,
});

module.exports = mongoose.model("product", productSchema);
