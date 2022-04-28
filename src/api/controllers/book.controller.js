const BookModel = require('../../models/book.model');
const catchAsync = require('../helpers/catchAsync.helper');

module.exports.getAllBook = catchAsync(async (req, res, next) => {
    const { authorId } = req.params;
    const books = await BookModel.find({
        authorId
    }).select('name genre authorId').lean();

    res.json({
        status: 'success',
        data: { books }
    })
});

module.exports.createBook = catchAsync(async (req, res, next) => {
    const { authorId } = req.params;
    const { name, genre } = req.body;
    const book = await BookModel.create({ name, genre, authorId });

    res.json({
        status: 'success',
        data: { book }
    })
});