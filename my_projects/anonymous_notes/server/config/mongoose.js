console.log("*******MONGOOSE*******")
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/anonymous_notes_db', {useNewUrlParser: true});