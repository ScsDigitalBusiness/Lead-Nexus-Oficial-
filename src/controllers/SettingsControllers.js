const { SignUp } = require("../models/SignupModelAndLoginModel");
exports.indexSettings =  async (req, res) => { 
  res.render("Settings");
   
}

exports.updateProfile = async (req, res) => { 
   const body =  {
    nome: req.body.nome,
    email: req.body.email,
    password: req.body.password, 
    passwordConfirmed: req.body.passwordConfirmed,
    userPhoto: req.file.filename
   }
    
   const profile = new SignUp(body);
  const profileUpdated = await profile.updateProfile(req.params.id);
  req.session.user = profileUpdated;
  req.session.save(() => {return res.redirect("back");})
 return 
}