var Menu = require('../models/Menu')

const addMenu = (req,res) =>{
  Menu.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    restaurant_id: req.headers.id,
    created_at: new Date,
    created_by: req.headers.created_by,
  },(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

const deleteMenu = (req,res) =>{
  Menu.remove({
    "_id":req.params.id
  },(err,result)=>{
    if (result) {
      res.send('Delete Success')
    }
    else {
      res.send({error_message:err})
    }
  })
}

const getRestaurantMenu = (req,res) =>{
  Menu.find({
    user_id: req.params.id
  },(err,result)=>{
    if (result) {
      res.send(result)
    }
    else {
      res.send({error_message:err})
    }
  })
}

module.exports = {
  addMenu,
  deleteMenu,
  getRestaurantMenu
}
