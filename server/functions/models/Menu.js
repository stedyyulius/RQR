const mongoose = require('mongoose')
const Schema = mongoose.Schema

var menuSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  restaurant_id: [{type: Schema.Types.ObjectId, ref: 'restaurant'}],
  created_at: Date,
  created_by: String,
  updated_at: Date,
  updated_by: String
})

var Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu
