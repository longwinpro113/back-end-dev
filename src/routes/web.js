const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Hello Long')
})
  
router.get('/long', function (req, res) {
    res.render('sample.ejs')
})

module.exports = router;