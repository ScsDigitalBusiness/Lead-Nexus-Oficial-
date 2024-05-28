const {Leads} = require("../models/LeadModel"); 
const Process = require("../models/ProcessModel");  
const Category = require("../models/CategoryMOdel");   

exports.indexDashboard =  async(req,res) =>{   
    const AllLeads = new Leads(req.body,req.session.user); 
    const allLeadsOnDB = await  AllLeads.getAllNumberOfLeadsRegisterForUser();    
    const leads = await AllLeads.getLeads()
    const emails = await  AllLeads.getAllEmails();   
    const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth();  
    const category =  new Category(req.body);  
    const process = new Process(req.body);  
    const categories =  await  category.getAllCategory();     
    const allProcess = await process.getAllProcess(); 
    res.render('Dashboard',{emails,allLeadsOnDB,leads,AllLeadsInMonth,categories,allProcess});
}; 
 