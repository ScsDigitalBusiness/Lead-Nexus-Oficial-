const express = require('express');
const { index } = require('./src/controllers/HomeControllers'); 

const {loginIndex, signupIndex,signupRegister, login} = require ("./src/controllers/LoginAndSignUpController")
const router = express.Router();

//Login and Singup Page
router.get("/", loginIndex);
router.post("/login/auth/",login)  


router.get('/signup/index',signupIndex)
router.post("/signup/register/",signupRegister);  

router.get("/home/index",index); 

module.exports = router; 