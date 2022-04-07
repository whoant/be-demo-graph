require('dotenv').config();
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

module.exports = async () => {
    try {
        await mongoose.connect(DB_URI, {
            dbName: 'demo-graph'
        });
        console.log('Connect database successfully !');
    } catch (e) {
        console.error(e);
        console.error('Connect database failed !');
        process.exit(0);
    }
};