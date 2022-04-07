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

module.exports = model('authors', AuthorSchema);