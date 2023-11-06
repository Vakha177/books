const mongoose= require('mongoose')

const authorSchema= mongoose.Schema({
    name: String , 
    info: String 
})

const author = mongoose.model('author', authorSchema)
module.exports=author