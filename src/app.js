const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bookRoutes = require("./bookRoutes");
const {clientError, serverError} = require('./errors')

app.use(bodyParser.json());
app.use("/book", bookRoutes);

app.use(clientError);
app.use(serverError);

module.exports = app;