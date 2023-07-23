const {User} = require("../schemes/index");

const getByEmail = (email) => {
    return User.findOne({email});
};

const addUser = async (data, password) => {
    return User.create({...data, password});
};

const updateUser = async (id, body) => {
    return User.findByIdAndUpdate({_id: id}, body);
};

module.exports = {
    getByEmail,
    addUser,
    updateUser
}