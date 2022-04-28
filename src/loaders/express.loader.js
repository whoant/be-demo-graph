const express = require("express");
const morgan = require("morgan");
module.exports = expressApp => {
    expressApp.use(express.json());
    expressApp.use(morgan('dev'));
};