const Contact = require("./schemesDataBase/contact");
const User = require('./schemesDataBase/user');
const addSchemaValidate = require("./schemesValidate/addSchemaValidate");
const favoriteSchemaValidate = require("./schemesValidate/favoriteSchemaValidate");
const loginSchemaValidate = require("./schemesValidate/loginSchemaValidate");
const registerSchemaValidate = require("./schemesValidate/registerSchemaValidate");
const subscriptionSchemaValidate = require('./schemesValidate/subscriptionSchemaValidate');
const emailValidate = require('./schemesValidate/emailValidate');

module.exports = {
    Contact,
    User,
    addSchemaValidate,
    favoriteSchemaValidate,
    loginSchemaValidate,
    registerSchemaValidate,
    subscriptionSchemaValidate,
    emailValidate,
}