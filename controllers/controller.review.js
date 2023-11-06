const review = require("../moduls/Review.model");
const Review = require("../moduls/Review.model");

module.exports.reviewController = {
    addReview: (req, res) => {
        const {nameAuthor, text, booksName} = req.body
        Review.create( {
            nameAuthor,
            text,
            booksName
        })
        .then((data) => res.json(data))
    },
    getReview: (req, res) => {
        Review.find({}).populate('book')
        .then((data) => res.json(data))
        .catch((err) => res.json('Book not found or has no reviews'))
        } , 
        deleteReview: (req,res) => {
            review.findDeleteById(req.params.id)
        .then((data) => {res.json(data)})
        .catch((error) => {res.json(error)})
        }
}
