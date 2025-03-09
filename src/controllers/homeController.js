const getHomePage = (req, res) => {
    res.send('Hello Long')
}

const getProduct = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getProduct
}