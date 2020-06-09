console.log("*******MONGOOSE*******")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weatherAPI_DB', {useNewUrlParser: true});