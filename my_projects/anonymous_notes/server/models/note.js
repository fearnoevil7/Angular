
console.log("*******Note MODEL*******")

    const mongoose = require('mongoose');
    const NoteSchema = new mongoose.Schema({
        content: {type:String, required: [true, "Note must have content included"], minlength: [3, "Note must be atleast 3 characters"]},
        date: { type: Date, default: Date.now }
    }, {timestamps: true})
    const Note = mongoose.model('Note', NoteSchema);
    module.exports = Note