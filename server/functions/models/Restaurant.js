const mongoose = require('mongoose')
const Schema = mongoose.Schema

var restaurantSchema = new Schema({
  name: String,
  image: String,
  address: String,
  user_id: [{type: Schema.Types.ObjectId, ref: 'User'}],
  menuList: [{type: Schema.Types.ObjectId, ref: 'Menu'}]
})

var Restaurant = mongoose.model('Restaurant',restaurantSchema)

module.exports = Restaurant
