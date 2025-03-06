const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

//todo config template engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('sample.ejs')
})

app.listen(port)