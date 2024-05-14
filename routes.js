const express = require('express'); 

const { index,createLead,logout,deleteLead,editLead,upate} = require('./src/controllers/HomeControllers'); 
const {loginIndex, signupIndex,signupRegister, login} = require ("./src/controllers/LoginAndSignUpController");  
const {indexDashboard} = require("./src/controllers/DashboardControllers"); 
const {indexCRM} = require ("./src/controllers/CrmControllers"); 
const {indexSettings}  = require ("./src/controllers/SettingsControllers") 
const router = express.Router();

//Login and Singup Page
router.get("/", loginIndex);
router.post("/login/auth/",login)  


router.get('/signup/index',signupIndex)
router.post("/signup/register/",signupRegister);   
//HOME ROUTES 
//rota home
router.get("/home/index/",index);  
//ppost do formulário
router.post("/home/leadcreate/",createLead); 
//delete 
router.get("/home/delete/:id",deleteLead);  
//edit 
router.get("/home/edit/:id",editLead);  
router.post("/home/update/:id",upate)

//logout  
router.get("/home/index/logout",logout); 

//DASHBOARD ROUTES 
router.get("/dashboard/index/",indexDashboard); 


//CRM ROUTES 

router.get("/crm/index/",indexCRM); 
 
//settings

router.get("/settings/index/",indexSettings)
 module.exports = router; 