const express = require("express");

const contacts = require("../../controllers/contacts/index");

const router = express.Router();

router.get("/", contacts.listContacts);

router.get("/:contactId", contacts.getContactById);

router.post("/", contacts.addContact);

router.delete("/:contactId", contacts.removeContact);

router.put("/:contactId", contacts.updateContact);

router.patch("/:contactId/favorite", contacts.updateContactFavorite);

module.exports = router;
