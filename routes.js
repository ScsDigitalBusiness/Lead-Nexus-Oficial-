const express = require('express'); 

const { index,createLead,logout,deleteLead,editLead,upate} = require('./src/controllers/HomeControllers'); 
const {loginIndex, signupIndex,signupRegister, login} = require ("./src/controllers/LoginAndSignUpController");  
const {indexDashboard} = require("./src/controllers/DashboardControllers"); 
const {indexCRM} = require ("./src/controllers/CrmControllers"); 
const {indexSettings,updateProfile}  = require ("./src/controllers/SettingsControllers")  
const {indexProduct,createProduct,editPage,editProduct,deleteProduct} = require("./src/controllers/ProductController");  
const {createCategory,deleteCategory} = require("./src/controllers/CategoryController"); 
const {createProcess,deleteProcess} = require("./src/controllers/ProcessController");
const {indexSales,createSales} = require("./src/controllers/SalesController"); 
const  multer =  require('multer');  
const uploads = multer ({dest: "./public/uploads"}); 
const path = require('path'); 
const router = express.Router();
 
//Login and Singup Page
router.get("/" ,loginIndex);
router.post("/login/auth/",login); 
//SIGNUP ROUTES
router.get('/signup/index',signupIndex);
router.post("/signup/register/",signupRegister);   
//rota home
router.get("/home/index/",index);   
//ppost do formulário
router.post("/home/create/",createLead); 
//delete 
router.get("/home/delete/:id",deleteLead);  
//edit 
router.get("/home/edit/:id",editLead);  
router.post("/home/update/:id",upate);
//logout  
router.get("/home/index/logout",logout); 
//DASHBOARD ROUTES 
router.get("/dashboard/index/",indexDashboard); 
//CRM ROUTES 
router.get("/crm/index/",indexCRM);   
//product-page routes 
router.get("/product/index/",indexProduct) 
router.post("/product/create/",createProduct); deleteCategory
router.get("/product/edit/index/:id",editPage); 
router.post("/product/edit/:id",editProduct);  
router.get("/product/delete/:id",deleteProduct);  
router.post("/category/create/",createCategory);  
router.post("/process/create/",createProcess); 
router.get("/process/delete/:id",deleteProcess);
router.get("/category/delete/:id",deleteCategory) 

//sales-page 
router.get("/sales/index/",indexSales); 
router.post("/sales/create/",createSales); 
//settings
router.get("/settings/index/",indexSettings);
router.post("/settings/update/:id",uploads.single('userImg'),  updateProfile); 
module.exports = router; 

