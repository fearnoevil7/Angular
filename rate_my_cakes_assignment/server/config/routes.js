console.log('*******ROUTES********')

const cakes = require("../controllers/cakes.js")
const reviews = require("../controllers/reviews.js")

module.exports = function(app){
    app.get('/cakes', function(req, res){
        cakes.index(req, res);
    });
    app.post('/cake', function(req, res){
        console.log("*******!!!!!!!!")
        cakes.create(req, res);
    });
    app.get('/cake/:id', function(req, res){
        cakes.show(req, res);
    });
    app.post('/review/:id', function(req, res){
        console.log("*******routes*******")
        reviews.create(req, res);
    });
}