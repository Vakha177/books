const { Router } = require("express")
const router = Router()
const { authorController } = require('../controllers/controller.author')

router.post('/addAuthor', authorController.addAuthor)
router.get('/author', authorController.getAuthor)

module.exports = router