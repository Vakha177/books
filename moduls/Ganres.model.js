const mongoose = require('mongoose')

const ganresSchema = mongoose.Schema ({
    nameGanre:String , 
    description: String 
})
const ganres = mongoose.model('ganres' , ganresSchema)

module.exports= ganres 