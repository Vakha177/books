const {Router} = require('express')
 const { booksController } = require('../controllers/controller')

 const router = Router()

 router.post('/books' ,booksController.addBooks)
 router.get('/books/:id', booksController.getBooksById)
 router.get('/books',booksController.getBooks)
 router.patch('/books/:id', booksController.patchBooks)
 router.delete('/books/:id',booksController.deleteBooks)
 router.get('/books/ByGenre',booksController.getBooksByIdGanres) 

 module.exports = router