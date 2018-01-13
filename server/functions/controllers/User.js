var User = require('../models/User')

const register = (req,res) =>{
  User.create({
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
    email   : req.body.email,
    handphone: req.body.handphone,
    role: req.body.role,
    device_id: req.body.device_id,
    created_at: new Date,
  },(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

const login = (req,res) =>{
  User.findOne({
    username: req.body.username,
    password: req.body.password
  },(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:'Incorrect Username or Password'})
    }
  })
}

const getUsers = (req,res) =>{
  User.find({},(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

module.exports = {
  register,
  login,
  getUsers
}
