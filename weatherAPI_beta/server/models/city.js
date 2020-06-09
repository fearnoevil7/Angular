console.log("*******CITY MODEL*******")

const mongoose = require('mongoose');
const CitySchema = new mongoose.Schema({
    name: {type: String, required: [true, "city name must be included"], minlength: [2, "city name must be atleast 2 characters"], maxlength: [25, "city name must not exceed 25 characters"]},
    state: {type: String, required: [true, "state must be included"], minlength: [2, "state input must be atleast 2 characters"], maxlength: [25, "state input must not exceed 25 characters"]},
}, {timestamps: true})
const City = mongoose.model('City', CitySchema);
module.exports = City