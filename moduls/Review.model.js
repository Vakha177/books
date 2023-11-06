const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: String , 
    nameAuthor: String ,  
    booksName: String
})

const review = mongoose.model('review', reviewSchema)

module.exports=review