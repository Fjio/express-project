const Joi = require("@hapi/joi");

const schema = Joi.object({
  username: Joi.string()
    .regex(/(^[A-Za-z0-9\-\_]*$)/)
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .trim()
    .min(10)
    .regex(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))/)
    .required(),
});

module.exports = schema;
