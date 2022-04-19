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
        res.render('index.ejs', {products: allProducts});
    });
});
// New Route
storeRouter.get("/new", (req, res) => {
    res.render('new.ejs');
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
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        if (err) console.log(err);
        res.redirect(`/store/${req.params.id}`);
    });
});
// Create Route
storeRouter.post("/", (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect("/store");
        };
    });
});
// Edit Route
storeRouter.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render("edit.ejs", {product});
    });
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