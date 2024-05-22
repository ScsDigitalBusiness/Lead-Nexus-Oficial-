const { SignUp } = require("../models/SignupModelAndLoginModel");
const fs = require('fs')
exports.indexSettings = (req, res) => {
  res.render("Settings");
}

exports.updateProfile = async (req, res) => {
  const profileData = {
    nome: req.body.nome,
    email: req.body.email,
    userImg: new Buffer.from(fs.readFileSync(req.file.path).toString("base64")),
  }

  const profile = new SignUp(profileData);
  const profileUpdated = await profile.updateProfile(req.params.id);
  req.session.user = profileUpdated;
  req.session.save(() => {return res.redirect("back");})
 return
}