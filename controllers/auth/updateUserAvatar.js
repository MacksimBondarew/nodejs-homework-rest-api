const path = require("path");
const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");
const fs = require("fs/promises");
const { users } = require("../../service/models");
const Jimp = require("jimp");

const updateUserAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const photoSize = await Jimp.read(tempUpload);
    const imageResize = await photoSize.resize(250, 250);
    console.log(imageResize);
    await imageResize.write(tempUpload);
    const fileName = `${_id}_250-250_${originalname}`;
    const resultUpload = path.join(avatarsDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", fileName);
    await users.updateUser(_id, { avatarURL });

    res.json({
        avatarURL,
    });
};

module.exports = updateUserAvatar;
