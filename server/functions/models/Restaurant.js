const mongoose = require('mongoose')
const Schema = mongoose.Schema

var restaurantSchema = new Schema({
  name: String,
  image: String,
  address: String,
  user_id: [{type:Schema.type.ObjectId,ref:'User'}],
  menuList: [{type:Schema.type.ObjectId,ref:'Menu'}]
})

var Restaurant = mongoose.model('Restaurant',restaurantSchema)

module.exports = Restaurant
