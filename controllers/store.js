////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express')
const storeRouter = express.Router()
///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
// Index Route
storeRouter.use("/", (req, res) => {
    console.log("The store is open")
    res.send("Welcome to the store")
})
// New Route
// Delete Route
// Update Route
// Create Route
// Edit Route
// Show Route
///////////////////////////
// Export
///////////////////////////
module.exports = storeRouter