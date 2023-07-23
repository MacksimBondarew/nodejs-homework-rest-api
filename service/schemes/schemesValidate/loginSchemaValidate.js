const Joi = require("joi");

const loginSchemaValidate = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = loginSchemaValidate;