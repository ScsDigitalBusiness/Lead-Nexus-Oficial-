const {Leads, getLeads} = require("../models/LeadModel"); 
exports.indexCRM =  async(req,res) => { 
   const leads =  await getLeads(); 
  res.render("Crm",{leads}); 
     
}