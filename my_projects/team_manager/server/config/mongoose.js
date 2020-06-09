console.log("*******MONGOOSE*******");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/team_manager_DB', {useNewUrlParser: true});