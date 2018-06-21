const router = require('express').Router()
const bookController = require('../controller/bookController')
router.post("/", bookController.postNewBook)
router.get('/', bookController.getAllBook)
router.get('/:id', bookController.getSingleBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router