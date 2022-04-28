const AuthorRoute = require('./author.route');
const BookRoute = require('./book.route');

module.exports = route => {
    route.use('/api/author', AuthorRoute);
    // route.use('/api/author/:authorId/book', BookRoute);
};