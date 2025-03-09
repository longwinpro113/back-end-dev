require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 3000

//? config template engine
configViewEngine(app)

//? Routes Declaration
app.use('/', webRoutes)

app.listen(port)