const { contacts } = require("../../service/models/index");

const addContact = async (req, res, next) => {
    const { _id: owner } = req.user;
    const result = await contacts.addContact(req.body, owner);
    res.status(201).json(result);
};

module.exports = addContact;
