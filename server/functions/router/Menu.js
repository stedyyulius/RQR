const express = require('express')
const router  = express.Router()
const Menu    = require('../controllers/Menu')

router.get('/:id',Menu.getRestaurantMenu)
router.post('/add',Menu.addMenu)
router.delete('/:id',Menu.deleteMenu)

module.exports = router
