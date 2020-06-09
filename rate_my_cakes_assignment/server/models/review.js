console.log("*******REVIEW MODEL*******")


const mongoose = require('mongoose')
    const ReviewSchema = new mongoose.Schema({
        comment: { type: String, required: [true, "review must have a comment"], minlength: [2, "comment must be atleast 2 characters long"] },
        rating: { type: String, required: [true, "review must have a rating"] }
    }, {timestamps: true})
    const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review
