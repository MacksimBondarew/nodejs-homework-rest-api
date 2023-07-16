const {Contact} = require("../service/schemas/index");

const listContacts = async () => {
    return Contact.find();
};

const getContactById = async (contactId) => {
    return Contact.findById(contactId);
};

const removeContact = async (contactId) => {
    return Contact.findByIdAndRemove(contactId);
};

const addContact = async (data) => {
    return Contact.create(data);
};

const updateContact = async (contactId, body) => {
    return Contact.findByIdAndUpdate({_id: contactId}, body, { new: true });
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
