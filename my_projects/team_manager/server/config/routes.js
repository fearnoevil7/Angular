console.log("*******ROUTES*******");

const players = require("../controllers/players.js");
const games = require("../controllers/games.js");

module.exports = function(app) {
    app.get("/app/players", function(req, res) {
        players.index(req, res);
    })

    app.post("/app/player", function(req, res){
        players.create(req, res);
    })

    app.delete('/app/player/:id', function(req, res) {
        players.destroy(req, res);
    })

    app.get("/app/game/:count", function(req, res){
        console.log("3");
        games.create(req, res);
    })

    app.get("/app/games", function(req, res) {
        games.index(req, res);
    })

    app.get("/app/games/updateRoster", function(req, res) {
        console.log("roster update route check");
        games.rosterUpdate(req, res);
    })
}