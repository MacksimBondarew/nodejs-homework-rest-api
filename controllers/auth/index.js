const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require('./getCurrent')
const { ctrlWrapper } = require('../../helpers');
const updateUserSubscription = require("./updateUserSubscription");
const updateUserAvatar = require("./updateUserAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");


module.exports = { 
    register: ctrlWrapper(register), 
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    getCurrent: ctrlWrapper(getCurrent),
    updateUserSubscription: ctrlWrapper(updateUserSubscription),
    updateUserAvatar: ctrlWrapper(updateUserAvatar),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
}