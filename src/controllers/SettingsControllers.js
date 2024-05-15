const {SignUp} = require("../models/SignupModelAndLoginModel");

exports.indexSettings = (req, res) => { 

  res.render("Settings");
}

exports.updateProfile = async (req, res) => {
   
   const profile = new SignUp( req.body); 
    const profileUpdated =  await profile.updateProfile(req.params.id);   
   req.session.user = profileUpdated;
  req.session.save(() => {
   res.redirect("back");

  })

}