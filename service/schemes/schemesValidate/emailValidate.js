const Joi = require("joi");

const emailValidate = Joi.object({
    email: Joi.string().required(),
});

module.exports = emailValidate;