const { Router } = require("express");

const BookController = require('../controllers/book.controller');

const router = Router();

router.get('/', BookController.getAllBook);

router.get('/', BookController.createBook);


module.exports = router;