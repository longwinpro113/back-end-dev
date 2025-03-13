const { json } = require('express');
const connection = require('../config/database')

const getHomePage = (req, res) => {
  return res.render('homepage.ejs')
}

const getProduct = (req, res) => {
  res.render('sample.ejs')
}

module.exports = {
  getHomePage, getProduct
}