const { Router } = require("express");

const BookController = require('../controllers/book.controller');

const router = Router();

router.get('/', BookController.getAllBook);

router.post('/', BookController.createBook);


module.exports = router;