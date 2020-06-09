console.log("*******CITIES CONTROLLER*******")

const City = require('../models/city.js')
module.exports = {
    index: function(req, res){
        City.find()
            .then(cities => {
                console.log(cities),
                res.json({cities: cities})
            })
            .catch(err => res.json(err))
    },
    // index: function(req, res){
    //     City.find()
    //         .then(cities => {
    //             console.log(cities),
    //             res.render("index")
    //         })
    //         .catch(err => res.json(err))
    // },
    create: function(req, res){
        console.log("req body test", req.body)
        const city = new City();
        city.city = req.body.city;
        city.state = req.body.state;
        console.log("req body test", req.body)
        console.log('created new city...', city)
        city.save()
            .then(newCityData => {
                console.log('city created: ', newCityData);
                res.json(newCityData);
        })
            .catch(err => {
                console.log(req.body)
                console.log(err);
                res.json(err);
            })
    },
    // create: function(req, res){
    //     console.log("req body test", req.body)
    //     const city = new City();
    //     city.city = req.body.city;
    //     city.state = req.body.state;
    //     console.log("req body test", req.body)
    //     console.log('created new city...', city)
    //     city.save()
    //         .then(newCityData => {
    //             console.log('city created: ', newCityData);
    //             res.redirect('/cities');
    //     })
    //         .catch(err => {
    //             console.log(req.body)
    //             console.log(err);
    //             res.json(err);
    //         })
    // },
}