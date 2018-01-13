const Restaurant = require('../models/Restaurant')

const createRestaurant = (req,res) =>{
  Restaurant.create({
    name: req.body.name,
    image: req.body.image,
    address: req.body.address,
    user_id: req.headers.id,
    menuList: []
  },(err,result)=>{
    if (result) {
    res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

const deleteRestaurant = (req,res) =>{
  Restaurant.findOne({
    "_id": req.params.id
  },(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

const getRestaurants = (req,res) =>{
  Restaurant.find({},(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

module.exports = {
  createRestaurant,
  deleteRestaurant,
  getRestaurants
}
