const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')//this is the code located in our controllers folder, in our home file(this is how we run the code)
const { ensureAuth } = require('../middleware/auth')



router.get('/', ensureAuth, booksController.getBooks) //router hands the request to the      homeController and runs the method of getIndex



module.exports = router