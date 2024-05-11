const {Leads,getLeads} = require("../models/LeadModel"); 

exports.index = async (req,res) => { 
    const leads =  await getLeads() ; 
    console.log(leads); 
    res.render("Home",{leads}); 
} 

exports.createLead = (req,res) =>{
    const leads = new Leads(req.body);  
    leads.createLead();   

    if(leads.errors.length > 0) {
        res.send(leads.errors); 
     }
    
    res.redirect("/home/index/"); 

}