console.log("*******AUTHORS CONTROLLLER*******")

const Author = require('../models/author.js')
module.exports = {
    index: function(req, res){
        Author.find()
            .then(authors => {
                res.json(authors)
            })
            .catch(err => res.json(err))
    },
    create: function(req, res){
        console.log(req.body);
        const author = new Author();
        author.name = req.body.name;
        console.log(author);
        author.save()
            .then(newAuthorData => {
                console.log('author created: ', newAuthorData)
                res.json(newAuthorData)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    show: function(req, res){
        Author.findOne({_id: req.params.id})
            .then(author => res.json(author))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    },

    update: function(req, res){
        Author.update({_id: req.body._id}, {$set: {name: req.body.name}}, { runValidators: true })
            .then(data => {
                console.log(data),
                res.json(data)
            })
            .catch(err => {
                console.log("Error", err);
                res.json(err)
            });
    },

    destroy: function(req, res){
        author = Author.findOne({_id: req.params.id}).then(destroyAuthor => {
            Author.remove(destroyAuthor)
            .then(data => {
                console.log("successfully destroying");
                res.json(data);
                })
        })

        .catch(err => {
            console.log("err", err)
            res.json(err);
        })
        .catch(err => {
            console.log("err", err);
            res.json(err);
        })
    }


}