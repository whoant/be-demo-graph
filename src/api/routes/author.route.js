const { Router } = require("express");

const AuthorController = require('../controllers/author.controller');

const router = Router();

router.get('/', AuthorController.getAllAuthor);

router.post('/', AuthorController.createAuthor);

module.exports = router;