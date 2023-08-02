const { users } = require("../../service/models/index");

const logout = async (req, res) => {
    const { _id } = req.user;
    await users.updateUser(_id, { token: ""});
    res.status(204).json({
        code: 204,
    });
};

module.exports = logout;