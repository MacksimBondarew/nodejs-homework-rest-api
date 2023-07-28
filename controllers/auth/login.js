const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users } = require('../../service/models/index');
const { HttpError } = require("../../helpers/index");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await users.getByEmail(email);

    if (!user) {
        throw HttpError(401, "Email or password is wrong");
    };

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(401, "Email or password is wrong");
    };

    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY);
    await users.updateUser(user._id, { token });

    res.json({
        token,
        user: {
            email,
            subscription: user.subscription,
        }
    })
};

module.exports = login;
