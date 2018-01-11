const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uri = 'mongodb://rqrdev:rqrdev@ds249757.mlab.com:49757/rqrdev'
mongoose.connect(uri)

app.use(bodyParser.json())
