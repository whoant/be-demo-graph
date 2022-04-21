const Author = require('../models/author.model');
const Book = require('../models/book.model');

const resolvers = {
	Query: {
		book: async (parent, args) => {
			return Book.findBook(args.id);
		},
		books: async () => {
			return Book.getAllBooks();
		},
		author: async (parent, args) => {
			return Author.findAuthor(args.id);
		},
		authors: async () => {
			return Author.getAllAuthors();
		},
	},

	Author: {
		books: async (parent, args) => {
			return Book.getBooksOfAuthor(parent.id);
		}
	},

	Book: {
		author: async (parent, args) => {
			return Author.findAuthor(parent.authorId);
		}
	},

	Mutation: {
		createAuthor: async (parent, args) => {
			const newAuthor = new Author(args);
			return newAuthor.save();
		},
		createBook: async (parent, args) => {
			const newBook = new Book(args)
			return newBook.save();
		}
	}
};

module.exports = resolvers;