const { Leads } = require("../models/LeadModel");
const Process = require("../models/ProcessModel");
const Category = require("../models/CategoryMOdel");
const Product = require("../models/ProductAndServiceModel")
const { SignUp } = require("../models/SignupModelAndLoginModel");
const Sales =require("../models/SalesModel") 
exports.indexDashboardAdm =  async (req,res) =>{ 
    const productModel = new Product(req.body);
    const signup = new SignUp(req.body); 
    const SalesModel = new Sales(req.body); 
    const AllLeads = new Leads(req.body, req.session.user);
    const allLeadsOnDB = await AllLeads.getAllNumberOfLeadsRegisterForUser();
    const leadsAll = await AllLeads.getLeads();
    const allLeadsToday = await AllLeads.getLeadsRegisterToday();
    const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth();
    const category = new Category(req.body);
    const process = new Process(req.body);
    const categories = await category.getAllCategory();
    const allProcess = await process.getAllProcess();
    const allUsers = await signup.getAllUsers();  
    const allSales = await SalesModel.getAllSales(); 
    const allSalesValues = await SalesModel.getAllSalesValue();
    const allSalesFinish = await SalesModel.getAllSalesFinished();  
    const allProducts = await productModel.getProducts()
  
    res.render('DashboardAdm', {allProducts,allSales,allSalesValues,allSalesFinish, allLeadsToday, allLeadsOnDB, leadsAll, AllLeadsInMonth, categories, allProcess, allUsers });
}
