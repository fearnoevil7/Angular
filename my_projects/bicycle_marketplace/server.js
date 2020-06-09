const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bicycle_marketplace_DB', {useNewUrlParser: true});
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
const flash = require('express-flash');
app.use(flash());

app.listen(8000, () => console.log("listening on port 8000"));