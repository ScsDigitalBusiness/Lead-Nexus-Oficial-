const { SignUp } = require("../models/SignupModelAndLoginModel");
const  {PhotoProfile} = require('../models/ProfilePhotosModel'); 
exports.indexSettings =  async (req, res) => { 
  const profilePhoto = new PhotoProfile();   
  const userPhoto =   await  profilePhoto.getUserPhoto(req.session.user._id) 
  console.log(userPhoto);  
  
    res.render("Settings",{userPhoto});
   
}

exports.updateProfile = async (req, res) => { 
  
   const profilePhoto = new PhotoProfile({
    _id_profile: req.session.user._id,
    originalname : req.file.originalname, 
    filename: req.file.filename, 
   }  );  
   await profilePhoto.create(); 
  const profile = new SignUp(req.body);
  const profileUpdated = await profile.updateProfile(req.params.id);
  req.session.user = profileUpdated;
  req.session.save(() => {return res.redirect("back");})
 return 
}