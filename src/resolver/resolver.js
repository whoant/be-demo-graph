const Author = require('../models/author.model');
const Book = require('../models/book.model');

const resolvers = {
	Query: {
		book: async (parent, args) => {
			return Book.findById(args.id);
		},
		books: async () => {
			return Book.getAllBooks();
		},
		author: async (parent, args) => {
			return Author.findById(args.id);
		},
		authors: async () => {
			return Author.find();
		},
	},

	Author: {
		books: async (parent, args) => {
			return Book.getBooksOfAuthor(parent.id);
		}
	},

	Book: {
		author: async (parent, args) => {
			return Author.findById(parent.authorId);
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