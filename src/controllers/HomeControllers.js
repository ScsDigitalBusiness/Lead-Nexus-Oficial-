const { Leads, getLeads, deleteLead, getLeadsById } = require("../models/LeadModel");
const { SignUp, getAllUsers } = require("../models/SignupModelAndLoginModel")

exports.index = async (req, res) => {
    const leads = await getLeads();
    const allUsers = await getAllUsers();
    if (req.session.user) return res.render('Home', { leads, allUsers });

}

exports.createLead = (req, res) => {
    const leads = new Leads(req.body);
    leads.createLead();

    if (leads.errors.length > 0) res.send(leads.errors);


    res.redirect("/home/index/");

}
exports.deleteLead = async (req, res) => {
    const deleted = await deleteLead(req.params.id);
    req.session.save(() => {
        res.redirect("back");
    })

}

exports.editLead = async (req, res) => {

    const leadForEdit = await getLeadsById(req.params.id);
    const allUsers = await getAllUsers();
    res.render("EditLead", { allUsers, leadForEdit });
}
exports.upate = async (req, res) => {
    const leads = new Leads(req.body);
    await leads.edit(req.params.id);
    res.redirect('/home/index/');

}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");

}