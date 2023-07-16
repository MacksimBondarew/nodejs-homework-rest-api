

const contacts = require("../service/index");
const { HttpError } = require("../helpers/index");
const { addSchemaValidate, favoriteSchemaValidate } = require('../service/schemas/index');


const listContacts = async (req, res, next) => {
    try {
        const result = await contacts.listContacts();
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getContactById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contacts.getContactById(contactId);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const removeContact = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contacts.removeContact(contactId);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json("contact deleted");
    } catch (error) {
        next(error);
    }
};

const addContact = async (req, res, next) => {
    try {
        const { error } = addSchemaValidate.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const result = await contacts.addContact(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const updateContact = async (req, res, next) => {
    try {
        if (req.body === null) {
            throw HttpError(400, "missing fields");
        };
        const { error} = addSchemaValidate.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        };
        const { contactId } = req.params;
        const result = await contacts.updateContact(contactId, req.body);
        if (!result) {
            throw HttpError(404, "Not found");
        };
        res.json(result);
    } catch (error) {
        next(error);        
    }
};

const updateContactFavorite = async (req, res, next) => {
    
    try {
        if (req.body === null) {
            throw HttpError(400, "missing field favorite");
        };
        const { error} = favoriteSchemaValidate.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        };
        const { contactId } = req.params;
        const { favorite = false } = req.body;

        const result = await contacts.updateContact(contactId, {favorite});
        if (!result) {
            throw HttpError(404, "Not found");
        };
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateContactFavorite
};