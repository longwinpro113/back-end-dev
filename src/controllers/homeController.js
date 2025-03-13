const { json } = require('express');
const connection = require('../config/database')
const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool to the database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getHomePage = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send('Error connecting to the database');
            return;
        }
        console.log('Connected to the MySQL database.');
        connection.release();
        return res.render('homepage.ejs');
    });
};

const getProduct = (req, res) => {
    res.render('sample.ejs');
};

module.exports = {
    getHomePage,
    getProduct
};