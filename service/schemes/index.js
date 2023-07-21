const Contact = require("./schemesDataBase/contact");
const addSchemaValidate = require("./schemesValidate/addSchemaValidate");
const favoriteSchemaValidate = require("./schemesValidate/favoriteSchemaValidate");
const loginSchemaValidate = require("./schemesValidate/loginSchemaValidate");
const registerSchemaValidate = require("./schemesValidate/registerSchemaValidate");

module.exports = {
    Contact,
    addSchemaValidate,
    favoriteSchemaValidate,
    loginSchemaValidate,
    registerSchemaValidate
}