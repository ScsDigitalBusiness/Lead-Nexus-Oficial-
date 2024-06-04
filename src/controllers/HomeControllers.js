const { Leads } = require("../models/LeadModel");
const { SignUp } = require("../models/SignupModelAndLoginModel");
const Product = require("../models/ProductAndServiceModel")
const Category = require("../models/CategoryMOdel");
const Process = require("../models/ProcessModel"); 

exports.index = async (req, res) => {
    const productModel = new Product(req.body);
    const leads = new Leads(req.body, req.session.user);
    const signup = new SignUp(req.body);
    const category = new Category(req.body);
    const process = new Process(req.body);
    const allLeads = await leads.getLeads();
    const allUsers = await signup.getAllUsers();
    const categories = await category.getAllCategory();
    const allProcess = await process.getAllProcess();
    const allProducts = await productModel.getProducts(); 
  
    if (req.session.user) return res.render('Home', {allLeads, allProducts, allUsers, categories, allProcess });
}
exports.createLead = async (req, res) => {
    const leads = new Leads(req.body, req.session.user);
    await leads.createLead();
    if (leads.errors.length > 0) res.send(leads.errors);
    res.redirect("/home/index/");

}
exports.deleteLead = async (req, res) => {
    const leads = new Leads(req.body, req.session.user);
    const deleted = await leads.deleteLead(req.params.id);
    req.session.save(() => { return res.redirect("back"); })
}
exports.editLead = async (req, res) => {
    const leads = new Leads(req.body, req.session.user);
    const signup = new SignUp(req.body);
    const leadForEdit = await leads.getLeadsById(req.params.id);
    const allUsers = await signup.getAllUsers();
    res.render("EditLead", { allUsers, leadForEdit });
}
exports.upate = async (req, res) => {
    const leads = new Leads(req.body, req.session.user);
    await leads.edit(req.params.id);
    res.redirect('/home/index/');

}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");

}