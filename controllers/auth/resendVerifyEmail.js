const { HttpError, sendEmailForUser } = require("../../helpers");
const { users } = require("../../service/models");
const { nanoid } = require("nanoid");
const url = process.env.BASE_URL

const resendVerifyEmail = async (req, res) => {
    const {email} = req.body;
    const user = await users.getByUser({ email });
    const verificationToken = nanoid();
    if (!user) {
        throw HttpError(401, "Email not found");
    };
    if (user.verify) {
        throw HttpError(400, "Verification has already been passed");
    };

    await users.updateUser(user._id, { verificationToken });

    const verifyEmail = {
        to: email, 
        subject: "Test email",
        html: `<a target="_blank" href="${url}/users/verify/${verificationToken}">Click verify email</a>`
    };

    console.log(verifyEmail);

    await sendEmailForUser(verifyEmail);

    res.json({
        message: "Verification email sent",
    })
}

module.exports = resendVerifyEmail;