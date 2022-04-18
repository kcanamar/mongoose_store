////////////////////////
// Setup - Import deps and create app object
////////////////////////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {type: String, required: true,},
    description: String || "N/A",
    img: String,
    price: Number,
    qty: Number
});
///////////////////////////
// Export
///////////////////////////
const Product = mongoose.model("Product", productSchema)
module.exports = Product