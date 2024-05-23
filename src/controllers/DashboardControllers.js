const {Leads} = require("../models/LeadModel")
exports.indexDashboard =  async(req,res) =>{   
    const AllLeads = new Leads(req.body,req.session.user); 
    const allLeadsOnDB = await  AllLeads.getAllNumberOfLeadsRegisterForUser();   
    const emails = await  AllLeads.getAllEmails();   
    const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth(); 
    res.render('Dashboard',{emails,allLeadsOnDB,AllLeadsInMonth});
}  