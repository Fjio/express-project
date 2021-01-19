const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const db = require('../db/connection');

const users = db.get('users');
const schema = Joi.object({
    username: Joi.string()
    .regex(/(^[a-zA-Z0-9_]*$)/)
    .min(3)
    .max(30),
    password: Joi.string()
    .trim()
    .min(12)
    .regex(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))/),
    role: Joi.string().valid('user','admin'),

    active: Joi.bool(),
});

