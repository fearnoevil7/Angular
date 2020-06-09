console.log("********ROUTES*******")

const cities = require("../controllers/cities.js");

module.exports = function(app){
    app.get('/cities', function(req, res){
        cities.index(req, res);
    });
    app.get('/city/:id', function(req, res){
        cities.show(req, res);
    });
    app.post('/city', function(req, res){
        console.log("*******TestingExpressCreateRoute*******")
        cities.create(req, res);
    });
    app.delete('/city/:id', function(req, res){
        cities.destroy(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}