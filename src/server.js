require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const mysql = require('mysql2')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 3000

//? config template engine
configViewEngine(app)

//? Routes Declaration
app.use('/', webRoutes)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack)
        return
    }
    console.log('Connected to the database.')

    // Query to select all records from the users table
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) throw error
        console.log('Users:', results)
    })
})

app.listen(port)