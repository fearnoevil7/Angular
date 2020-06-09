const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const mongoose = require('./server/config/mongoose.js');
// mongoose.connect('mongodb://localhost/rate_my_cakes_db', {useNewUrlParser: true});
// app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/public/dist/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// const flash = require('express-flash');
// const session = require('express-session');
// app.use(flash());
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }))




// NOTE pulling in MONGODB
require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')


// NOTE PULLING IN CONTROLLERS
// require('./server/config/routes.js')(app);
// require('./server/controllers/cakes.js');
// require('./server/controllers/reviews.js');


app.listen(8000, () => console.log("listening on port 8000"));