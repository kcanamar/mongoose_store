////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const Product = require('../models/products');
const productsSeed = require('../models/seed');
const storeRouter = express.Router();
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show, Seed
// Index Route
storeRouter.get("/", (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('index.ejs', {products: allProducts})
    });
});
// New Route
storeRouter.get("/new", (req, res) => {
    console.log("A New Chllanger Approaches");
    res.send("New LTO...");
});
// Seed Route
storeRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        Product.create(productsSeed, (err, data) => {
            res.redirect("/store");
        });
    });
});
// Delete Route
storeRouter.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        res.redirect("/store");
    });
});
// Update Route
storeRouter.put('/:id', (req, res) => {
    console.log("Upgrade Complete..." + req.params.id);
    res.send("Upgrade Merge Complete..." + req.params.id); 
});
// Create Route
storeRouter.post("/", (req, res) => {
    console.log("You Must Contruct Additional Pylons." + req.body.name);
    res.send("Look its a baby" + req.body.name);
});
// Edit Route
storeRouter.get("/:id/edit", (req, res) => {
    console.log("Edit this one" + req.params.id);
    res.send("Okay who is getting a new hair cut?" + req.params.id);
});
// Show Route
storeRouter.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('show.ejs', {product: foundProduct});
    });
});
///////////////////////////
// Export
///////////////////////////
module.exports = storeRouter;