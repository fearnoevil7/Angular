import { Mongoose } from "mongoose";

console.log("*******QUOTE_MODEL*******");

const QuoteSchema = new mongoose.Schema({
    content: {type: String, required: [true, "quote must have content"], minlength: [4, "quote must be atleast 4 characters"], maxlength: [25, "quote must exceed 25 characters"]},
}, {timestamps: true})

module.exports = Quote