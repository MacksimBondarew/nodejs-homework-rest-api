const bcrypt = require("bcrypt");
const { users } = require("../../service/models/index");
const { HttpError, sendEmailForUser } = require("../../helpers/index");
const gravatar = require('gravatar');
const { nanoid } = require("nanoid");
const url = process.env.BASE_URL

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.getByUser({email});

    if (user) {
        throw HttpError(409, "Email already in use");
    };

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL  = gravatar.url(email);
    const verificationToken = nanoid();

    const newUser = await users.addUser(req.body, hashPassword, avatarURL, verificationToken);

    const verifyEmail = {
        to: email, 
        subject: "Test email",
        html: `<a target="_blank" href="${url}/users/verify/${verificationToken}">Click verify email</a>`
    };

    await sendEmailForUser(verifyEmail);
    
    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        },
    });
};

module.exports = register;
