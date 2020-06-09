const express = require("express");
const app = express();
// app.use(express.static(__dirname + "/client/static"));
app.use(express.static(__dirname + "/public/dist/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
    secret: 'encrypt',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 600000}
}))

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')

app.listen(8000, () => console.log("listening on port 8000"));