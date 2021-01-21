const express = require("express");
const app = express();
require("dotenv").config();
//dependencies :

const middleware = require('./auth/auth.middlewares');
const auth = require('./auth/auth.routes');

app.use(express.json());

app.use(middleware.checkTokenSetUser);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    user: req.user,
  });
});

app.use(
  '/auth',
  auth,
);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

module.exports = app;
