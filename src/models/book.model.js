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

module.exports = model('books', BookSchema);