const { SettingsModel } = require("../models/SettingsModel");

exports.indexSettings = (req, res) => {
  res.render("Settings");
}

exports.updateProfile = async (req, res) => {

  const profile = new SettingsModel( req.body);
   await profile.updateProfile(req.params.id);   
   
  req.session.user = profile.body;
  req.session.save(() => {
   res.redirect("back");

  })

}