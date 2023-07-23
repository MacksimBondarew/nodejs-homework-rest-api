const { users } = require("../../service/models/index");
const { HttpError } = require("../../helpers/index");

const updateUserSubscription = async (req, res, next) => {
    if (req.body === null) {
        throw HttpError(400, "missing field subscription");
    }
    const { id } = req.params;
    const { subscription = "starter" } = req.body;

    const result = await users.updateUser(id, { subscription });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateUserSubscription;
