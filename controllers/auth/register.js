const bcrypt = require("bcrypt");
const { users } = require("../../service/models/index");
const { HttpError } = require("../../helpers/index");
const gravatar = require('gravatar');

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.getByEmail(email);

    if (user) {
        throw HttpError(409, "Email already in use");
    };


    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL  = gravatar.url(email);

    const newUser = await users.addUser(req.body, hashPassword, avatarURL );

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        },
    });
};

module.exports = register;
