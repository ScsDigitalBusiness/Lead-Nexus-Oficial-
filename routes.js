const express = require('express');
const { index } = require('./src/controllers/HomeControllers'); 
const {loginRegister, loginIndex} = require("./src/controllers/LoginController");  
const {signupIndex} = require ("./src/controllers/SignUpController")
const router = express.Router();

router.get("/", index);
router.get("/login/index", loginIndex);
router.post("login/register/",loginRegister)  
//Singup-page : 

router.get('/signup/index',signupIndex)



module.exports = router; 