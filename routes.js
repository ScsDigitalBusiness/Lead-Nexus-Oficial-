const express = require('express');
const { index } = require('./src/controllers/HomeControllers'); 
const {loginIndex} = require("./src/controllers/LoginController"); 
const router = express.Router();

router.get("/", index);
router.get("/login/index", loginIndex);
router.post("login/register/",loginRegister)

module.exports = router; 