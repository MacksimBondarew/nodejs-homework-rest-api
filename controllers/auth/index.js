const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require('./getCurrent')
const { ctrlWrapper } = require('../../helpers');
const updateUserSubscription = require("./updateUserSubscription");

module.exports = { 
    register: ctrlWrapper(register), 
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    getCurrent: ctrlWrapper(getCurrent),
    updateUserSubscription: ctrlWrapper(updateUserSubscription),
}