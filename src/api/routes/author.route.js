const { Router } = require("express");

const AuthorController = require('../controllers/author.controller');
const BookController = require('../controllers/book.controller');

const router = Router();

router.get('/', AuthorController.getAllAuthor);

router.post('/', AuthorController.createAuthor);

router.get('/:authorId/book', BookController.getAllBook);

router.post('/:authorId/book', BookController.createBook);

module.exports = router;