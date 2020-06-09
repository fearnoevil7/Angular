console.log("********GAME MODEL********");

const player = require('../models/player.js');
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    number: {type: Number},
    players: [player.schema]
})
const Game = mongoose.model('Game', GameSchema);
module.exports = Game;