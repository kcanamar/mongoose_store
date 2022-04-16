////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const storeController = require('./controllers/store');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

///////////////////////////
// Server Listener
///////////////////////////
//MongoDB & Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + "oops that didnt work"));
db.on('connected', () => console.log("mongoose connected"));
db.on('disconnected', () => console.log("mongoose disconnected"));
app.listen(PORT, () => console.log("Hello Welcome..."));