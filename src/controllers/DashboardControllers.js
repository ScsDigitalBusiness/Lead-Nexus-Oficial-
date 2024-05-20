const {getLeads}= require("../models/LeadModel")
exports.indexDashboard =  async(req,res) =>{ 
    const leads = await getLeads(); 
    res.render('Dashboard',{leads});
} 