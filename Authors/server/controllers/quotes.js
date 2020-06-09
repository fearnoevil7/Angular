console.log("*******QUOTE_CONTROLLER*******");

const Quote = require('../models/quote.js');
const Author = require('../models/author.js');
module.exports = {
    create: function(req, res){
        console.log(req.body);
        const quote = new Quote();
        quote.content = req.body.content;
        console.log(quote);
        quote.save()
            .then(newQuote => {
                console.log("******controller****** New Quote: ", newQuote);
                console.log("*****controller ID******: ", req.params.id)
                Author.update({_id: req.params.id}, {$push: {quotes: newQuote}})
                    .then(authorReceipt => {
                        console.log('author', authorReceipt)
                        res.json({quote: newQuote, author: authorReceipt})
                    })
            })
            .catch(err => {
                console.log(err);
                res.json({err})
            })
                    .catch(err => {
                        console.log(err);
                        res.json({err})
                    })
    },
    // like: function(res, req){

    // }
}