console.log("*******MONGOOSE*******");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_ranks_db', {useNewUrlParser: true});