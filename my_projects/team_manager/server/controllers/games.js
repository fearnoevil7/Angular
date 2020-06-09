console.log("*******GAME CONTROLLER*******");

const Game = require('../models/game.js');
const Player = require('../models/player.js');

module.exports = {
    create: function(req, res){
        // count = req.params;
        console.log("Express params test", req.params);
        Player.find()
            .then(playersToAdd => {
                console.log("players being prepared to be added to game", playersToAdd);
                const game = new Game();
                for(var i = 0; i < playersToAdd.length; i++){
                    console.log("Testing loop output", playersToAdd[i]);
                    game.players.push(playersToAdd[i]);
                }
                game.number = req.params.count;
                game.save()
                    .then(game => {
                        console.log("newly created game", game);
                        console.log("game count!", game.number);
                    })
                    .catch(err => {
                        console.log("errors: ", err);
                        res.json(err);
                    })
            })
            .catch(err => {
                console.log("errors: ", err);
                res.json(err);
            })
    },

    index: function(req, res) {
        Game.find()
            .then(games => {
                console.log("List of our games in express        ", games);
                res.json(games);
            })
            .catch(err => {
                console.log("errors: ", err);
                res.json(err);
            })
    },

    rosterUpdate: function(req, res) {
        console.log("Testtiiingg!!!!!!!!!!!!!!!!!!!!!!!!!!")
        Game.find()
            .then(games => {
                Player.find()
                    .then(thePlayers =>{
                        for ( var i = 0; i < games.length; i++ ) {
                            for ( var q = 0; q < thePlayers.length; q++ ) {
                                console.log("current gme being updated ", games[i]);
                                console.log("Checking if this player is in this game roster", thePlayers[q]);
                                playerInList = false;
                                for ( var x = 0; x < games[i].players.length; x++ ) {
                                    console.log("current player we are tryin to add      ", thePlayers[q]);
                                    console.log("current value being compared      ", games[i].players[x]);
                                    if ( thePlayers[q] != games[i].players[x] ) {
                                        playerInList = true;
                                    }
                                }
                                if ( playerInList == true ) {
                                    console.log(games[i].players);
                                    console.log("Player about to be added to game roster", thePlayers[q]);
                                    games[i].players.push(thePlayers[q]);
                                    console.log("currenr game", games[i].players, games[i]);
                                }
                            }
                        }
                    })
                    .catch(err => {
                        console.log("errors: ", err);
                        res.json(err);
                    })
            })
    }
}