console.log("******* Review Controller *******")

const Review = require('../models/review.js')
const Cake = require('../models/cake.js')
module.exports = {
    create: function(req, res){
        const review = new Review();
        review.comment = req.body.comment;
        review.rating = req.body.rating;
        // console.log(review);
        // console.log(req.params.id)
        // res.redirect('/');
        review.save()
            .then(newReviewData => {
                console.log('review created: ', newReviewData);
                // Cake.findOne({_id: req.params.id})
                // .then(cake => {
                //     cake.reviews.push(newReviewData);
                //     return cake.save()
                // })
                // .then(reviewedCake => {
                //     res.json(reviewedCake)
                // })
                // .catch(err => res.json(err))

                Cake.update({_id: req.params.id}, {$push: {reviews: newReviewData}})
                .then(cakeReceipt => {
                    console.log('cake',cakeReceipt)
                    res.json({review: newReviewData, cake: cakeReceipt})
                    // res.redirect('/')
                })
                .catch(err => {
                    console.log(err);
                    for (var key in err.errors) {
                        req.flash('create review', err.errors[key].newReviewData);
                    }
                    // res.redirect('/');
                    res.json(err)
                })
        })
            .catch(err => {
                console.log(err);
                for (var key in err.errors) {
                    req.flash('create cake', err.errors[key].review);
                }
                res.json(err)
                // res.redirect('/')
            })
            
    }
}