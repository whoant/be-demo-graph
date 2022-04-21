const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
	}
}, {
	timestamps: true
});

AuthorSchema.statics.getAllAuthors = function () {
	return this.find();
};

AuthorSchema.statics.findAuthor = function (authorId) {
	return this.findById(authorId);
};

module.exports = model('authors', AuthorSchema);