console.log('*******QUOTE_MODEL******');

const mongoose = require('mongoose')
    const QuoteSchema = new mongoose.Schema({
        content: {type: String, required: [true, "quote must have content"], minlength: [4, "Quote must be atleast four characters longs"], maxlength: [25, "quote cannot exceed 25 characters"]},
        vote: {type: Number, default: 0},
    }, { timestamps: true })
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote