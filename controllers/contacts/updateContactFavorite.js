const { contacts } = require("../../service/models/index");
const { HttpError } = require("../../helpers/index");

const updateContactFavorite = async (req, res, next) => {
    if (req.body === null) {
        throw HttpError(400, "missing field favorite");
    }
    const { contactId } = req.params;
    const { favorite = false } = req.body;

    const result = await contacts.updateContact(contactId, { favorite });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateContactFavorite;
