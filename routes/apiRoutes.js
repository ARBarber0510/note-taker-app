const db = require("../db/db.json");

const fs = require("fs");

const { v4: uuidv4 } = require('uuid');


// Routing

module.exports = function(app) {

    // GET
    app.get("/api/notes", function(req, res) {
        res.send(db);
    });

    // POST
    app.post("/api/notes", function(req, res) {


        var newNote = {
            id: uuidv4(),

            title: req.body.title,
            text: req.body.text


        };

        db.push(newNote);

        res.send(newNote);

    });

    // DELETE
    app.delete("/api/notes/:id", function(req, res) {
        
        var noteID = req.params.id


        db.forEach(object => {
            if(object.id === noteID) {

                var objIndex = db.indexOf(object);

                db.splice(objIndex,1);
            }
        });

        res.send(db);
    });

};