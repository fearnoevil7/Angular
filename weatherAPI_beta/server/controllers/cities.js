console.log("*******CITIES CONTROLLER")

const City = require('../models/city.js')
module.exports = {
    index: function(req, res){
        City.find()
            .then(cities => {
                console.log(cities)
                res.json({cities: cities})
            })
            .catch(err => res.json(err))
    },

    create: function(req, res){
        console.log("req body test", req.body)
        const city = new City();
        city.name = req.body.name;
        city.state = req.body.state;
        console.log('created new city...', city)
        city.save()
            .then(newCityData =>{
                console.log('city created: ', newCityData)
                res.json(newCityData);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    show: function(req, res){
        console.log(req.params)
        // City.findOne({_id: req.params.id})
        //     .then(city => res.json(city))
        //     .catch(err => {
        //         console.log("error", err);
        //         res.json(err);
        //     });
    },
    destroy: function(req, res) {
        City.findOne({_id: req.params.id}).then(destroyCity => {
            City.remove(destroyCity)
                .then(data => { res.json(data)})
                
                .catch(err => {
                    res.json(err);
                })
                .catch(err => {
                    res.json(err);
                });
        })
    }
}