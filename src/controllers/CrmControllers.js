const { Leads } = require("../models/LeadModel"); 
const  {PhotoProfile} = require('../models/ProfilePhotosModel'); 
exports.indexCRM = async (req, res) => {
  const leads = new Leads(req.body, req.session.user);
  const allLeads = await leads.getLeads(); 
  const profilePhoto = new PhotoProfile();   
    const userPhoto =   await  profilePhoto.getUserPhoto(req.session.user._id) 
    console.log(userPhoto);

  res.render("Crm", { userPhoto,allLeads });

}