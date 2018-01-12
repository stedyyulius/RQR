const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
  fullname: String,
  username: String,
  password: String,
  email   : String,
  handphone: String,
  role: String,
  device_id: Array,
  last_login: Date,
  created_at: Date,
  updated_at: Date,
  isLogin: Boolean
})

var User = mongoose.model('User',UserSchema)

module.exports = User
