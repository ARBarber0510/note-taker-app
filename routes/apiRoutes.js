// Linking routes to notes data source.
var notesData = require("../notesData.js");


// Routing

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });


    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(true);
    });


    app.post("/api/delete", function(req, res) {
        notesData.length = 0;

        res.json({ ok: true});
    });
}