////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const storeRouter = require('./controllers/store');
const morgan = require('morgan')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
//////////////////////
// Declare Middleware
//////////////////////
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.use("/store", storeRouter);
///////////////////////////
// Server Listener
///////////////////////////
//MongoDB & Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + "oops that didnt work"));
db.on('connected', () => console.log("mongoose connected"));
db.on('disconnected', () => console.log("mongoose disconnected"));
app.listen(PORT, () => console.log("Hello Welcome..."));