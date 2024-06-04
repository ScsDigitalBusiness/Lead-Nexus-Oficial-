const Product = require("../models/ProductAndServiceModel")
const { Leads } = require("../models/LeadModel");
const Category = require("../models/CategoryMOdel");
const { SignUp } = require("../models/SignupModelAndLoginModel");
const Process = require("../models/ProcessModel");  
const Sales =require("../models/SalesModel") 
const  {PhotoProfile} = require('../models/ProfilePhotosModel'); 
exports.indexSales = async (req, res) => { 
    const SalesModel = new Sales(req.body); 
    const productModel = new Product(req.body);
    const leads = new Leads(req.body, req.session.user);
    const signup = new SignUp(req.body);
    const category = new Category(req.body);
    const process = new Process(req.body);
    const allProducts = await productModel.getProducts();
    const allUsers = await signup.getAllUsers();
    const categories = await category.getAllCategory();
    const allProcess = await process.getAllProcess();
    const allLeads = await leads.getLeads(); 
    const allSales = await SalesModel.getAllSales(); 
    const allSalesValues = await SalesModel.getAllSalesValue();
    const allSalesFinish = await SalesModel.getAllSalesFinished(); 
    const profilePhoto = new PhotoProfile();   
  const userPhoto =   await  profilePhoto.getUserPhoto(req.session.user._id) 
  console.log(userPhoto);  

    res.render("Sales", {userPhoto,allSales,allSalesValues,allSalesFinish,allLeads, allProducts, categories, allUsers, allProcess });

}
exports.createSales = async (req, res) => {
   const SalesModel = new Sales(req.body); 
   await SalesModel.create(); 
   res.redirect("back");   
} 
exports.deleteSales = async (req,res) => {
    const SalesModel = new Sales(req.body); 
    await SalesModel.delete(req.params.id);  
    res.redirect("back"); 
} 
exports.editSales = async (req,res) => {
    const SalesModel = new Sales(req.body); 
    await SalesModel.edit(req.params.id);  
    res.redirect("back"); 
}