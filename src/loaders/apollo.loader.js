const { ApolloServer } = require("apollo-server-express");
const typeDefs = require('../schema/schema');
const resolvers = require('../resolver/resolver');

module.exports = async expressApp => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    server.applyMiddleware({ app: expressApp });
};