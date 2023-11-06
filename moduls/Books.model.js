const mongoose = require('mongoose')

const booksSchema = mongoose.Schema ({
    name: String , 
    author: String , 
    ganre: String 
})

const book = mongoose.model('book' , booksSchema)
module.exports=book