console.log("*******ROUTES********")

    const notes = require("../controllers/notes.js");

    module.exports = function(app){
        app.post("/app/note", function(req, res){
            notes.create(req, res);
        });
        app.get("/app/note", function(req, res) {
            notes.show(req, res);
        });
        app.get("/app/notes", function(req, res) {
            notes.index(req, res);
        })
    }