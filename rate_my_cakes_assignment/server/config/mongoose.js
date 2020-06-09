console.log("*******MONGOOSE*******")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes_db', {useNewUrlParser: true});