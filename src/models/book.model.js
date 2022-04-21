const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	authorId: {
		type: Schema.Types.ObjectId,
		ref: 'authors',
		required: true
	}
}, {
	timestamps: true
});

BookSchema.statics.getBooksOfAuthor = function (authorId) {
	return this.find({ authorId });
};

BookSchema.statics.getAllBooks = function () {
	return this.find();
}

module.exports = model('books', BookSchema);