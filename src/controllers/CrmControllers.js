const {Leads} = require("../models/LeadModel"); 
exports.indexCRM =  async(req,res) => { 
  const leads = new Leads(req.body,req.session.user); 
  const allLeads =  await leads.getLeads(); 
  res.render("Crm",{allLeads}); 
     
}