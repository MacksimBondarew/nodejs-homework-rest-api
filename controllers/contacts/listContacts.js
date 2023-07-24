const { contacts } = require("../../service/models/index");

const listContacts = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const result = await contacts.listContacts(owner, skip, limit, favorite);
    res.json(result);
};

module.exports = listContacts;
