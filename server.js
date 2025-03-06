const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, My name is Long')
})

app.listen(3000)