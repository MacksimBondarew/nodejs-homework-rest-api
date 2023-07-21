const contacts = require("../../service/models/index");
const { HttpError } = require("../../helpers/index");
const { addSchemaValidate } = require("../../service/schemes/index");

const addContact = async (req, res, next) => {
    const { error } = addSchemaValidate.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

module.exports = addContact;
