const jwt = require("jsonwebtoken");

const { HttpError } = require("../helpers/index");

const { User } = require("../service/schemes/index");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !authorization) {
        res.json({
            message: "Not authorized",
        });
        next(HttpError(401));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            res.json({
                message: "Not authorized",
            });
            next(HttpError(401, "Not authorized"));
        }
        req.user = user;
        next();
    } catch (error) {
        next(HttpError(error));
    }
};

module.exports = authenticate;
