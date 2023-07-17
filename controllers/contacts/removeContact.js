const contacts = require("../../service/index");
const { HttpError } = require("../../helpers/index");

const removeContact = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json("contact deleted");
};

module.exports = removeContact;
