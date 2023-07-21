const Joi = require("joi");

const registerSchemaValidate = Joi.object({
    name: Joi.string().required,
    email: Joi.string().required,
    password: Joi.string().required,
});

module.exports = registerSchemaValidate;