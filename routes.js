const express = require('express');
const { index } = require('./src/controllers/HomeControllers'); 
const {loginRegister, loginIndex} = require("./src/controllers/LoginController");  
const {signupIndex,signupRegister} = require ("./src/controllers/SignUpController")
const router = express.Router();

router.get("/", index);
router.get("/login/index", loginIndex);
router.post("login/register/",loginRegister)  
//Singup-page : 

router.get('/signup/index',signupIndex)
router.post("/signup/index/register/",signupRegister); 

module.exports = router; 