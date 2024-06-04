const { Leads } = require("../models/LeadModel");
const Process = require("../models/ProcessModel");
const Category = require("../models/CategoryMOdel");
const Product = require("../models/ProductAndServiceModel")
const { SignUp } = require("../models/SignupModelAndLoginModel");
const  {PhotoProfile} = require('../models/ProfilePhotosModel'); 


exports.indexDashboard = async (req, res) => {
    const signup = new SignUp(req.body);
    const AllLeads = new Leads(req.body, req.session.user);
    const products = new Product(req.body);
    const allLeadsOnDB = await AllLeads.getAllNumberOfLeadsRegisterForUser();
    const leadsAll = await AllLeads.getLeads();
    const allLeadsToday = await AllLeads.getLeadsRegisterToday();
    const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth();
    const category = new Category(req.body);
    const process = new Process(req.body);
    const categories = await category.getAllCategory();
    const allProcess = await process.getAllProcess();
    const allUsers = await signup.getAllUsers(); 
    const profilePhoto = new PhotoProfile();   
    const userPhoto =   await  profilePhoto.getUserPhoto(req.session.user._id) 
    console.log(userPhoto);

    res.render('Dashboard', {userPhoto, allLeadsToday, allLeadsOnDB, leadsAll, AllLeadsInMonth, categories, allProcess, allUsers });
};
