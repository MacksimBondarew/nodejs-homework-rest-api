const { HttpError } = require("../../helpers");
const { users } = require("../../service/models");

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await users.getByUser({ verificationToken });

    if (!user) {
        throw HttpError(401, "User not found");
    }
    await users.updateUser(user._id, { verify: true, verificationToken: null });

    res.json({
        message: "Verification successful",
    });
};

module.exports = verifyEmail