const mongoLoader = require('./mongo.loader');
const expressLoader = require('./express.loader');
const apolloLoader = require('./apollo.loader');

module.exports = async app => {
    await mongoLoader();
    expressLoader(app);
    await apolloLoader(app);
};