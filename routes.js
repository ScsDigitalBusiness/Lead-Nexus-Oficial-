const express = require('express');
const { index } = require('./src/controllers/HomeControllers'); 
const {loginRegister, loginIndex} = require("./src/controllers/LoginController");  
const {signupIndex,signupRegister, login} = require ("./src/controllers/SignUpController")
const router = express.Router();

router.get("/", index);
router.get("/login/index", loginIndex);
router.post("login/index/register/",login)  


router.get('/signup/index',signupIndex)
router.post("/signup/index/register/",signupRegister); 

module.exports = router; 