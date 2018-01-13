const express = require('express')
const router  = express.Router()
const Restaurant = require('../controllers/Restaurant')

router.get('/',Restaurant.getRestaurants)
router.post('/create',Restaurant.createRestaurant)
router.delete('/:id',Restaurant.deleteRestaurant)

module.exports = router
