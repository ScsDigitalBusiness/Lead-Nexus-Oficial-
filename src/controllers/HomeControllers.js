const { Leads} = require("../models/LeadModel");
const { SignUp} = require("../models/SignupModelAndLoginModel");

exports.index = async (req, res) => {
    const leads = new Leads(req.body,req.session.user); 
    const signup = new SignUp(req.body); 
    const allLeads = await leads.getLeads();  
    const allUsers = await signup.getAllUsers(); 
    console.log(allUsers); 
    if (req.session.user) return res.render('Home', {allLeads, allUsers });
}
exports.createLead = async (req, res) => {
    const leads = new Leads(req.body,req.session.user); 
    await  leads.createLead();
    if (leads.errors.length > 0) res.send(leads.errors);
    res.redirect("/home/index/");

}
exports.deleteLead = async (req, res) => { 
    const leads = new Leads(req.body,req.session.user); 
    const deleted = await leads.deleteLead(req.params.id);
    req.session.save(() => {return res.redirect("back");})
}

exports.editLead = async (req, res) => {
    const leads = new Leads(req.body,req.session.user);  
    const signup = new SignUp(req.body); 
    const leadForEdit = await leads.getLeadsById(req.params.id);
    const allUsers = await signup.getAllUsers();
    res.render("EditLead", { allUsers, leadForEdit });
}
exports.upate = async (req, res) => { 
    const leads = new Leads(req.body,req.session.user);
    await leads.edit(req.params.id);
    res.redirect('/home/index/');

}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");

}