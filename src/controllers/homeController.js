const { json } = require('express');
const pool = require('../config/database');
const mysql = require('mysql2');
require('dotenv').config();

const getHomePage = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send('Error connecting to the database');
            return;
        }
        connection.release();
        return res.render('homepage.ejs');
    });
};

const getProduct = (req, res) => {
    res.render('sample.ejs');
};

const getAboutPage = (req, res) => {
    res.render('about.ejs');
};

const createUser = (req, res) => {
    const { name, email, city } = req.body;
    const query = 'INSERT INTO users (name, email, city) VALUES (?, ?, ?)';
    pool.query(query, [name, email, city], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Failed to add user');
            return;
        }
        res.status(201).send('User added successfully');
    });
};

const getAllUsers = (req, res) => {
    const query = 'SELECT id, name, email, city FROM users';
    pool.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Failed to fetch users');
            return;
        }
        res.status(200).json(results);
    });
};

const deleteUsers = (req, res) => {
    const { ids } = req.body;
    const query = 'DELETE FROM users WHERE id IN (?)';
    pool.query(query, [ids], (err, result) => {
        if (err) {
            console.error('Error deleting users:', err);
            res.status(500).send('Failed to delete users');
            return;
        }
        res.status(200).send('Users deleted successfully');
    });
};

module.exports = {
    getHomePage,
    getProduct,
    getAboutPage,
    createUser,
    getAllUsers,
    deleteUsers
};