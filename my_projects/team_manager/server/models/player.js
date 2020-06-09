console.log("*******PLAYER MODEL*******");

const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Player name must be included!"], minlength: [2, "Player name must be atleast two characters"], maxlength: [25, "Player name must not exceed 25 characters"]},
    position: {type: String, required: [true, "Player position must be included!"]},
}, {timestamps: true})
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;