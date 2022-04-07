const express = require("express");

const PORT = process.env.PORT || 8080;
const loaders = require('./loaders');

const app = express();

loaders(app);
app.listen({ port: PORT }, () => {
    console.log(`Connect ready at http://localhost:${PORT}`);
});


