const express = require('express');
const { getHomePage, getProduct, getAboutPage, createUser, getAllUsers, deleteUsers } = require('../controllers/homeController');
const router = express.Router();

//? router.method('/route', handler)
router.get('', getHomePage);
router.get('/product', getProduct);
router.get('/about', getAboutPage);
router.post('/create-user', createUser);
router.get('/api/users', getAllUsers);
router.delete('/api/users', deleteUsers);

module.exports = router;