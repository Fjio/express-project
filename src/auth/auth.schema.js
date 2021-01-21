const Joi = require('@hapi/joi');

const schema = Joi.object({
    username: Joi.string()
    .regex(/(^[a-zA-Z0-9_]*$)/)
    .min(3)
    .max(30),
  password: Joi.string()
    .trim()
    .min(12)
    .regex(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))/),
});

module.exports = schema;
