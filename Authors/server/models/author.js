console.log("*******AUTHOR MODEL*******")

const quotes = require('../models/quote.js');
console.log(quotes)
const mongoose = require('mongoose');
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, required: [true, "author name must be included"], minlength: [2, "Author name must be atleast 2 characters"], maxlength: [25, "author name must be atleast 25 characters"]},
        quotes: [quotes.schema]
    }, {timestamps: true})
    const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author