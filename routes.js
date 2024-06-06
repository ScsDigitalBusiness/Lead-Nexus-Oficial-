const express = require('express'); 

const { index,createLead,logout,deleteLead,editLead,upate} = require('./src/controllers/HomeControllers'); 
const {loginIndex, signupIndex,signupRegister, login} = require ("./src/controllers/LoginAndSignUpController");  
const {indexAllUsers,editUserPermission} = require("./src/controllers/AllUsersControllers")
const {indexDashboard} = require("./src/controllers/DashboardControllers"); 
const {indexCRM} = require ("./src/controllers/CrmControllers"); 
const {indexSettings,updateProfile}  = require ("./src/controllers/SettingsControllers")  
const {indexProduct,createProduct,editPage,editProduct,deleteProduct} = require("./src/controllers/ProductController");  
const {createCategory,deleteCategory} = require("./src/controllers/CategoryController"); 
const {createProcess,deleteProcess} = require("./src/controllers/ProcessController");
const {indexSales,createSales,deleteSales,editSales} = require("./src/controllers/SalesController"); 
const  multer =  require('multer');   
const multerConfig = require("./src/config/multerConfig"); 
const uploads = multer (multerConfig); 
const router = express.Router();
 
//Login and Singup Page
router.get("/" ,loginIndex);
router.post("/login/auth/",login); 
//SIGNUP ROUTES
router.get('/signup/index',signupIndex);
router.post("/signup/register/",signupRegister);   
//rota home
router.get("/home/index/",index);   
//post do formulário
router.post("/home/create/", uploads.single('photoLead'),createLead); 
//delete 
router.get("/home/delete/:id",deleteLead);  
//edit 
router.get("/home/edit/:id",editLead);  
router.post("/home/update/:id",uploads.single('leadPhotoEdit'),upate);
//logout  
router.get("/home/index/logout",logout); 
//DASHBOARD ROUTES 
router.get("/dashboard/index/",indexDashboard); 
//CRM ROUTES 
router.get("/crm/index/",indexCRM);   
//product-page routes 
router.get("/product/index/",indexProduct) 
router.post("/product/create/", uploads.single('productPhoto'),createProduct); 
router.get("/product/edit/index/:id",editPage); 
router.post("/product/edit/:id",uploads.single('productPhoto-edited'),editProduct);  
router.get("/product/delete/:id",deleteProduct);  
router.post("/category/create/",createCategory);  
router.post("/process/create/",createProcess); 
router.get("/process/delete/:id",deleteProcess);
router.get("/category/delete/:id",deleteCategory) 
//allUsers Page 
router.get("/allUsers/index/",indexAllUsers);  
router.post('/allUsers/edit/:id',editUserPermission)
//sales-page 
router.get("/sales/index/",indexSales); 
router.post("/sale/create/",createSales);  
router.get("/sale/delete/:id",deleteSales); 
router.post("/sale/edit/:id",editSales); 


//settings
router.get("/settings/index/",indexSettings);
router.post("/settings/update/:id",uploads.single('userPhoto'),  updateProfile); 
module.exports = router; 

