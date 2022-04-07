const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        id: ID!
        name: String
        age: Int,
        books: [Book]
    }

    type Book {
        id: ID!
        name: String
        genre: String,
        author: Author
    }

    type Query{
        book(id: ID!): Book,
        books: [Book]
        author(id: ID!): Author
        authors: [Author]
    }

    type Mutation {
        createAuthor(name: String, age: Int): Author
        createBook(name: String, genre: String, authorId: ID!): Book
    }
`;

module.exports = typeDefs;