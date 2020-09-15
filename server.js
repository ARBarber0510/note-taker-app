// Express npm pkg required to run server
var express = require("express");

// Create Express server
var app = express();


// Set initial port to be used in the listener
var PORT = process.env.PORT || 4000;

// Express.static built-in middleware function to serve static files
app.use(express.static('public'));


// Set up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Points server to routes for how to respond when users wisit or request data
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Listener - starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});