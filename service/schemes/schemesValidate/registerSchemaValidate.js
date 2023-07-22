const Joi = require("joi");

const registerSchemaValidate = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
});

module.exports = registerSchemaValidate;