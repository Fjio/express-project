const express = require('express');

const controller = require('./auth.controller');
const middlewares = require('./auth.middlewares');

const router = express.Router();
// /auth/...

const defaultLoginError = 'Unable to login.';
const signInError = 'That username is already taken. Please choose another one.';
router.get('/', controller.get);
router.post(
  '/signup',
  middlewares.validateUser(),
  middlewares.findUser(signInError, (user) => user, 409),
  controller.signup,
);
router.post(
  '/login',
  middlewares.validateUser(defaultLoginError),
  middlewares.findUser(defaultLoginError, (user) => !(user && user.active)),
  controller.login,
);

module.exports = router;
