var express = require("express");

var app = express();

var PORT = process.env.PORT || 4000;


// Set up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Build routes folder and set up route files (check activity 15)