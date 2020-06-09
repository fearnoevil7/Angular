console.log("******* CAKE CONTROLLER*******")

const Cake = require('../models/cake.js')
module.exports = {
    // index: function(req, res){
    //     Cake.find()
    //         .then(cakes => {
    //             console.log(cakes),
    //             res.render("index", {cakes})
    //         })
    //         .catch(err => res.json(err));
    //     // res.render("index")
    // },
    index: function(req, res){
        Cake.find()
            .then(cakes => {
                console.log(cakes),
                res.json({cakes: cakes})
            })
            .catch(err => res.json(err));
    },


    create: function(req, res){
        const cake = new Cake();
        cake.baker = req.body.baker;
        cake.url = req.body.url;
        console.log(cake)
        console.log("body", req.body)
        cake.save()
            .then(newCakeData => {
                console.log('cake created: ', newCakeData);
                res.json(newCakeData);
                // res.redirect('/')
        })
            .catch(err => {
                console.log(err);
                for (var key in err.errors) {
                    req.flash('create cake', err.errors[key].cake);
                }
                // res.redirect('/')
                res.json(err);
            })
    },
    // show: function(req, res){
    //     Cake.findOne({_id: req.params.id})
    //         .then(cake => res.render("show"))
    //         .catch(err => {
    //             console.log("error", err);
    //             res.json(err);
    //         });
    // }
    show: function(req, res){
        Cake.findOne({_id: req.params.id})
            .then(cake => res.json(cake))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    }
}