const express = require('express')
const { getHomePage, getProduct } = require('../controllers/homeController')
const router = express.Router()

//? router.method('/route', handler)
router.get('/', getHomePage)
router.get('/Product', getProduct)

module.exports = router;