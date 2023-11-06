const Books = require('../moduls/Books.model')

module.exports.booksController ={
 addBooks: (req , res) => {
 Books.create({
    name: req.body.name , 
    author: req.body.author , 
    ganre: req.body.ganre
 }).then((data) => {res.json(data)})
 .catch((error) => {res.json(error)}) 
},
 deleteBooks:(req,res) => {
    Books.findByIdDelete(req.params.id)
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
    }, 
    patchBooks:(req,res) => {
        Books.findByIdEdit(req.params.id)
        .then((data) => {res.json(data)})
        .catch((error) => {res.json(error)})
    },
  getBooksById:(req , res) => {
    Books.findById(req.params.id)
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
  },
  getBooks:(req,res) => {
    Books.find()
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
  },
  getBooksByIdGanres:(req,res) => {
    Books.findByIdGanres(req.params.id)
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
  } ,

}
