const {User} = require("../schemes/index");

const getByUser = (data) => {
    return User.findOne(data);
};

const addUser = async (data, password, avatarURL, verificationToken  ) => {
    return User.create({...data, password, avatarURL : avatarURL, verificationToken: verificationToken  });
};

const updateUser = async (id, body) => {
    return User.findByIdAndUpdate({_id: id}, body, { new: true });
};

module.exports = {
    getByUser,
    addUser,
    updateUser
}