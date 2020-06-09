console.log("*******ROUTES********")

const authors = require("../controllers/authors.js");
const quotes = require("../controllers/quotes.js");

module.exports = function(app){
    app.get('/authors', function(req, res){
        console.log("success")
        authors.index(req, res);
    });
    app.get('/author/:id', function(req, res){
        console.log("******testing route******")
        authors.show(req, res);
    })
    // app.get('/like/:authorid/:quoteid', function(req, res){
    //     quotes.like(req, res);
    // })
    app.post("/quote/:id", function(req, res){
        quotes.create(req, res);
    })
    app.post("/author", function(req, res){
        console.log("******testing route******")
        authors.create(req, res);
    });
    app.put("/author", function(req, res){
        authors.update(req, res);
    })
    app.delete("/author/:id", function(req, res) {
        console.log('testing destroy route express')
        authors.destroy(req, res);
    })
}