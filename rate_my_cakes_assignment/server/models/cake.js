console.log("*******CAKE MODEL*******")

const reviews = require('../models/review.js')
const mongoose = require('mongoose')
    const CakeSchema = new mongoose.Schema({
        baker: { type: String, required: [true, "cake must have a baker"], minlength: [2, "baker name must be atleast 2 characters"], maxlength: [25, "baker name must not exceed 25 characters"] },
        url: { type: String, required: [true, "cake must have a url"] },
        reviews: [reviews.schema]
    }, { timestamps: true })
    const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake