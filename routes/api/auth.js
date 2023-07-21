const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const router = express.Router();
const schemas = require("../../service/schemes/index");

router.post('/register', validateBody(schemas.registerSchemaValidate));

router.post('/login', validateBody(schemas.loginSchemaValidate));


