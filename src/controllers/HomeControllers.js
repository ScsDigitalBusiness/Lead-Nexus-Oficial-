const { Leads,deleteLead, getLeadsById,getLeads } = require("../models/LeadModel");
const { getAllUsers } = require("../models/SignupModelAndLoginModel")

exports.index = async (req, res) => {
   
    const leads = await getLeads(); 
    const allUsers = await getAllUsers();
    if (req.session.user) return res.render('Home', { leads, allUsers });
}

exports.createLead = async (req, res) => {
    const leads = new Leads(req.body,req.session.user); 
   
     await  leads.createLead();
     if (leads.errors.length > 0) res.send(leads.errors);
     res.redirect("/home/index/");

}
exports.deleteLead = async (req, res) => {
    const deleted = await deleteLead(req.params.id);
    req.session.save(() => {return res.redirect("back")})

}

exports.editLead = async (req, res) => {

    const leadForEdit = await getLeadsById(req.params.id);
    const allUsers = await getAllUsers();
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