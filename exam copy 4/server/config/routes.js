console.log("*******ROUTES*******");

const pets = require("../controllers/pets.js");

module.exports = function(app){
    app.get('/pets', function(req, res){
        pets.index(req, res);
    })

    app.get('/pets/:id', function(req, res){
        pets.show(req, res);
    })

    app.post('/pet', function(req, res){
        pets.create(req, res);
    })
    app.put('/pet', function(req, res){
        pets.update(req, res);
    })

    app.delete('/destroy/:id', function(req, res){
        pets.destroy(req, res);
    })
}