const {Contact} = require("../schemes/index");

const listContacts = async (owner, skip, limit, favorite) => {
    if (favorite === undefined) {
        return Contact.find({ owner }, "-createdAt -updatedAt", {skip, limit}).populate("owner", "email subscription");
    }

    return Contact.find({owner, favorite }, "-createdAt -updatedAt", {skip, limit}).populate("owner", "email subscription");
};

const getContactById = async (contactId) => {
    return Contact.findById(contactId);
};

const removeContact = async (contactId) => {
    return Contact.findByIdAndRemove(contactId);
};

const addContact = async (data, owner) => {
    return Contact.create({...data, owner});
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
