console.log("*******ROUTES*******")

const cities = require("../controllers/cities.js")

module.exports = function(app){
    app.all("*", (req, res, next)=> {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

    app.get('/cities', function(req, res){
        cities.index(req, res);
    });
    app.post('/city', function(req, res){
        console.log("***************TestingCreateRoute***********")
        cities.create(req, res);
    })
}