const Contact = require("./schemesDataBase/contact");
const User = require('./schemesDataBase/user');
const addSchemaValidate = require("./schemesValidate/addSchemaValidate");
const favoriteSchemaValidate = require("./schemesValidate/favoriteSchemaValidate");
const loginSchemaValidate = require("./schemesValidate/loginSchemaValidate");
const registerSchemaValidate = require("./schemesValidate/registerSchemaValidate");
const subscriptionSchemaValidate = require('./schemesValidate/subscriptionSchemaValidate');

module.exports = {
    Contact,
    addSchemaValidate,
    favoriteSchemaValidate,
    loginSchemaValidate,
    registerSchemaValidate,
    subscriptionSchemaValidate,
    User,
}