////////////////////////
// Setup - Import deps and create app object
////////////////////////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String || "N/A",
    description: String || "N/A",
    img: String || "/static/no-image.png",
    price: Number || 0,
    qty: Number || 0
});
///////////////////////////
// Export
///////////////////////////
const Product = mongoose.model("Product", productSchema)
module.exports = Product