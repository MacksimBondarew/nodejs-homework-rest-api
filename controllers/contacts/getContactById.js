const contacts = require("../../service/models/index");
const { HttpError } = require("../../helpers/index");

const getContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = getContactById;
