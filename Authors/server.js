console.log("*******Server*******")
const express = require("express");
const app = express();
const mongoose = require('./server/config/mongoose.js');
const path = require("path");
app.use(express.static(__dirname + '/public/dist/public'));
// app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.set(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
    secret: 'encrypt',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
app.use(express.json());

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js')



app.listen(8000, () => console.log("listening on port 8000"));