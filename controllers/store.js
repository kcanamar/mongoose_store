////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express')
const storeRouter = express.Router()
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show, Seed
// Index Route
storeRouter.get("/", (req, res) => {
    console.log("The store is open")
    res.send("Welcome to the store")
})
// New Route
storeRouter.get("/new", (req, res) => {
    console.log("A New Chllanger Approaches")
    res.send("New LTO...")
})
// Seed Route
storeRouter.get("/seed", (req, res) => {
    console.log("Seed you lawn")
    res.send("Seeded......")
})
// Delete Route
storeRouter.delete("/:id", (req, res) => {
    console.log("Target Neutralized..." + req.params.id)
    res.send("Deleted...." + req.params.id)
})
// Update Route
storeRouter.put('/:id', (req, res) => {
    console.log("Upgrade Complete..." + req.params.id)
    res.send("Upgrade Merge Complete..." + req.params.id) 
})
// Create Route
storeRouter.post("/", (req, res) => {
    console.log("You Must Contruct Additional Pylons." + req.body.name)
    res.send("Look its a baby" + req.body.name)
})
// Edit Route
storeRouter.get("/:id/edit", (req, res) => {
    console.log("Edit this one" + req.params.id)
    res.send("Okay who is getting a new hair cut?" + req.params.id)
})
// Show Route
storeRouter.get("/:id", (req, res) => {
    console.log("I have chosen" + req.params.id)
    res.send("Chosen One!... I'm Coming!" + req.params.id)
})
///////////////////////////
// Export
///////////////////////////
module.exports = storeRouter