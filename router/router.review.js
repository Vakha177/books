const { Router } = require('express')
const { reviewController } = require('../controllers/controller.review')
const router= Router()
router.get('/review', reviewController.getReview)
router.post('/addReview', reviewController.addReview)

module.exports = router