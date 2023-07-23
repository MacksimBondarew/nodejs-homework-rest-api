const express = require("express");

const contacts = require("../../controllers/contacts/index");
const { authenticate, validateBody } = require("../../middlewares");
const { addSchemaValidate, favoriteSchemaValidate } = require("../../service/schemes");

const router = express.Router();

router.get("/", authenticate, contacts.listContacts);

router.get("/:contactId", authenticate, contacts.getContactById);

router.post("/", authenticate, validateBody(addSchemaValidate) , contacts.addContact);

router.delete("/:contactId", authenticate, contacts.removeContact);

router.put("/:contactId", authenticate, validateBody(addSchemaValidate), contacts.updateContact);

router.patch("/:contactId/favorite", authenticate, validateBody(favoriteSchemaValidate), authenticate, contacts.updateContactFavorite);

module.exports = router;
