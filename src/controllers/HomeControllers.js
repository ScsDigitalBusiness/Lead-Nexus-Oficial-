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
    const body = {
        name: req.body.name,
        tel: req.body.tel,
        email:req.body.email, 
        photoLead: req.file.filename,
        typeLead:  req.body.typeLead,
        uf:  req.body.uf,
        city: req.body.city,
        date:  req.body.date,
        material:   req.body.material,
        typeOfMaterial:  req.body.typeOfMaterial,
        process:  req.body.process,
        colaborator: req.body.colaborator
    }
    const leads = new Leads(body, req.session.user);
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
    const productModel = new Product(req.body);
    const category = new Category(req.body);
    const process = new Process(req.body);
    const leadForEdit = await leads.getLeadsById(req.params.id);
    const allUsers = await signup.getAllUsers(); 
    const categories = await category.getAllCategory();
    const allProcess = await process.getAllProcess();
    const allProducts = await productModel.getProducts();  
    
    res.render("EditLead", { allUsers, leadForEdit,categories,allProcess,allProducts});
}
exports.upate = async (req, res) => {    
    let body = {}
    if(!req.file) {
        body = {
            name: req.body.name,
            tel: req.body.tel,
            email:req.body.email, 
            typeLead:  req.body.typeLead,
            uf:  req.body.uf,
            city: req.body.city,
            date:  req.body.date,
            material:   req.body.material,
            typeOfMaterial:  req.body.typeOfMaterial,
            process:  req.body.process,
            colaborator: req.body.colaborator
        }
    }else {
        body = {
            name: req.body.name,
            tel: req.body.tel,
            email:req.body.email, 
            photoLead: req.file.filename,
            typeLead:  req.body.typeLead,
            uf:  req.body.uf,
            city: req.body.city,
            date:  req.body.date,
            material:   req.body.material,
            typeOfMaterial:  req.body.typeOfMaterial,
            process:  req.body.process,
            colaborator: req.body.colaborator
        }
    }
      
    const leads = new Leads(body, req.session.user);
    await leads.edit(req.params.id);
    res.redirect('/home/index/'); 

}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");

}