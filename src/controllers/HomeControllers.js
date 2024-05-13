const { Leads, getLeads } = require("../models/LeadModel");
const { SignUp, getAllUsers } = require("../models/SignupModelAndLoginModel")

exports.index = async (req, res) => {
    const leads = await getLeads();
    const allUsers = await getAllUsers();
    if (req.session.user) return res.render('Home', { leads, allUsers });

}

exports.createLead = (req, res) => {
    const leads = new Leads(req.body);
    leads.createLead();

    if (leads.errors.length > 0) {
        res.send(leads.errors);
    }

    res.redirect("/home/index/");

} 

exports.logout = (req,res) => {
    req.session.destroy(); 
    res.redirect("/"); 
     
}