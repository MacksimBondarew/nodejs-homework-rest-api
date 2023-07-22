const Joi = require("joi");

const allowedValues = ["starter", "pro", "business"];

const subscriptionSchemaValidate = Joi.object({
    subscription: Joi.string().valid(...allowedValues).required(),
});

module.exports = subscriptionSchemaValidate;