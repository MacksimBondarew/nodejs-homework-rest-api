const contacts = require("../../service/index");
const { HttpError } = require("../../helpers/index");
const { addSchemaValidate } = require("../../service/schemas/index");

const updateContact = async (req, res, next) => {
    if (req.body === null) {
        throw HttpError(400, "missing fields");
    }
    const { error } = addSchemaValidate.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateContact;
