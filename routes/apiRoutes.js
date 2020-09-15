const db = require("../db/db.json");

const fs = require("fs");


// // Linking routes to notes data source.
// var notesData = require("../notesData.js");


// Routing

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.send(db);
    });


    app.post("/api/notes", function(req, res) {


        // notesData.push(req.body);
        // res.json(true);
    });


    app.post("/api/delete", function(req, res) {
        notesData.length = 0;

        res.json({ ok: true});
    });
}