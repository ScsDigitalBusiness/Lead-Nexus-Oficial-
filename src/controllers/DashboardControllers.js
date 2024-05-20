const {getAllEmails,getLeads}= require("../models/LeadModel")
exports.indexDashboard =  async(req,res) =>{  
    const leadsOfUser = await getLeads();  
    console.log(leadsOfUser)
    const leads = await getAllEmails();  
    res.render('Dashboard',{leads});
} 