const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./router/User')
const Restaurant = require('./router/Restaurant')
const Menu = require('./router/Menu')

const uri = 'mongodb://rqrdev:rqrdev@ds249757.mlab.com:49757/rqrdev'
mongoose.connect(uri)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user',User)
app.use('restaurant',Restaurant)
app.use('/menu',Menu)
