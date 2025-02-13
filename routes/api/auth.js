const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares/index");
const router = express.Router();
const schemas = require("../../service/schemes/index");
const auth = require("../../controllers/auth/index");

router.post('/register', validateBody(schemas.registerSchemaValidate), auth.register);

router.get("/verify/:verificationToken", auth.verifyEmail);

router.post('/verify', validateBody(schemas.emailValidate), auth.resendVerifyEmail);

router.post('/login', validateBody(schemas.loginSchemaValidate), auth.login);

router.post('/logout', authenticate, auth.logout);

router.get('/current', authenticate, auth.getCurrent);

router.patch('/:id/subscription', authenticate, validateBody(schemas.subscriptionSchemaValidate) , auth.updateUserSubscription);

router.patch('/avatars', authenticate, upload.single('avatar') , auth.updateUserAvatar);



module.exports = router;