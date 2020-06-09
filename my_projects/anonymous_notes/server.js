console.log("*******Server*******")
    const express = require("express");
    const app = express();
    const mongoose = require('./server/config/mongoose.js');
    // mongoose.connect('mongodb://localhost/anonymous_notes_db', {useNewUrlParser: true});
    app.use(express.static( __dirname + '/public/dist/public' ));
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
    app.use(express.json());
    require('./server/config/routes.js')(app);
    require('./server/config/mongoose.js');

    app.listen(8000, () => console.log("listening on port 8000"));