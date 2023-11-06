const { Router } = require('express')
const { ganresController} = require('../controllers/controller.ganres')

const router = Router()

router.get('/genres', ganresController.getGanres)
router.post('/genres', ganresController.addGanres)
router.delete('/genres/:id', ganresController.deleteGanres)

module.exports = router