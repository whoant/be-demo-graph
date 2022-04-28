const AuthorModel = require('../../models/author.model');
const catchAsync = require('../helpers/catchAsync.helper');

module.exports.getAllAuthor = catchAsync(async (req, res, next) => {
    const authors = await AuthorModel.find().select('name age').lean();

    res.json({
        status: 'success',
        data: {
            authors
        }
    });
});

module.exports.createAuthor = catchAsync(async (req, res, next) => {
    const { name, age } = req.body;
    const author = await AuthorModel.create({ name, age });

    res.json({
        status: 'success',
        data: {
            author
        }
    });
});