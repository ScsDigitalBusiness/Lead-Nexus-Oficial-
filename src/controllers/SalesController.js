const Product =  require("../models/ProductAndServiceModel")  
const { Leads } = require("../models/LeadModel");
const Category = require("../models/CategoryMOdel");   
const { SignUp} = require("../models/SignupModelAndLoginModel");
const Process = require("../models/ProcessModel"); 
exports.indexSales  =  async (req,res) =>{ 
    const productModel = new Product(req.body);  
    const leads = new Leads(req.body, req.session.user);

  const signup = new SignUp(req.body);  
  const category =  new Category(req.body);  
  const process = new Process(req.body); 
  const allProducts = await productModel.getProducts();  
  const allUsers = await signup.getAllUsers();
  const categories =  await  category.getAllCategory();    
  const allProcess = await process.getAllProcess();  
  const allLeads = await leads.getLeads();
  res.render("Sales",{allLeads,allProducts,categories,allUsers,allProcess}); 

} 
exports.createSales = async (req,res) =>{
      
}