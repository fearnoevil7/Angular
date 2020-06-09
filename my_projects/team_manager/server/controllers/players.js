console.log("********PLAYERS CONTROLLER*******");

const Player = require('../models/player.js');

module.exports = {
    index: function(req, res) {
        Player.find()
            .then(players => {
                console.log("List of players in express", players);
                res.json({players: players});
            })
            .catch(err => {
                console.log("errors: ", err);
                res.json(err);
            })
    },
    create: function(req, res){
        console.log(req.body);
        const player = new Player();
        player.name = req.body.name;
        player.position = req.body.position;
        console.log(player);
        player.save()
            .then(newPlayerData => {
                console.log('player created: ', newPlayerData);
                res.json(newPlayerData);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    destroy: function(req, res) {
        console.log("Express id check        ", req.params )
        Player.findOne({_id: req.params.id}).then(destroyPlayer => {
            Player.remove(destroyPlayer)
                .then(data => { res.json(data)})
                .catch(err => {
                    res.json(err);
                })
            })
                .catch(err => {
                    res.json(err);
                })
    }
}