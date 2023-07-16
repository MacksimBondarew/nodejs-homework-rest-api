const Joi = require("joi");

const favoriteSchemaValidate = Joi.object({
    favorite: Joi.boolean().required(),
});

module.exports = favoriteSchemaValidate;