const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require('../api/routes');
const AppError = require("../api/helpers/appError.helper");
const { handleError } = require("../api/helpers/response.helper");


module.exports = expressApp => {
    expressApp.use(cors())
    expressApp.use(express.json());
    expressApp.use(morgan('dev'));
    routes(expressApp);
    // expressApp.all('*', (req, res, next) => {
    //     next(new AppError(`Can't find ${req.originalUrl} on this server !`, 400));
    // });
    expressApp.use(handleError);
};