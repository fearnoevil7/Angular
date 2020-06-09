console.log("*******CITY MODEL*******")

const mongoose = require('mongoose')
    const CitySchema = new mongoose.Schema({
        city: {type: String, required: [true, "city name must be included"], minlength: [2, "city name must be 2 characters long"], maxlength: [25, "city name must not exceed 25 characters"]},
        state: {type: String, required: [true, "state name must be included"], minlength: [2, "state name must be atleast 2 characters"], maxlength: [25, "state name must not exceed 25 characters"]},
        humidity: Number,
        average_temperature: Number,
        high_temperature: Number,
        low_temperature: Number,
        status: String
    }, { timestamps: true })
    const City = mongoose.model('City', CitySchema);
module.exports = City