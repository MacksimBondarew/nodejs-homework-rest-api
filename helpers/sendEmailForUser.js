const nodemailer = require("nodemailer");

const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "rakushka324@meta.ua",
        pass: process.env.PASSWORD,
    },
};

const trasport = nodemailer.createTransport(config)

const sendEmailForUser = async (data) => {
    const email = { from: "rakushka324@meta.ua", ...data };
    await trasport
        .sendMail(email)
        .then(() => console.log("email send success"))
        .catch(() => console.log("email send false"));
    return true;
};

module.exports = sendEmailForUser;
