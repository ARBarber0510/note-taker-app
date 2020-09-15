var express = require("express");

var app = express();

var PORT = process.env.PORT || 4000;


// Set up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Points server to routes for how to respond when users wisit or request data
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);