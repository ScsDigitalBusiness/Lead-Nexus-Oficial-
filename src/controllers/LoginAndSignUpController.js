const { Leads, getLeads } = require("../models/LeadModel");
const { SignUp, getAllUsers } = require("../models/SignupModelAndLoginModel");

exports.signupIndex = (req, res) => {
   res.render("singup");
}

exports.loginIndex = async (req, res) => {
   const signup = new SignUp(req.body);
   // req.flash("error",signup.errors);
   const allUsers = await getAllUsers();
   const leads = await getLeads();
   if (req.session.user)  return res.render('Home', { leads, allUsers });
   
   res.render("Login");
}
exports.signupRegister = async (req, res) => {
   const singUp = new SignUp(req.body);
   await singUp.register();
   if (singUp.errors.length > 0) {
      req.session.save(() => res.redirect('back'));
   
   }
   res.redirect("/")



}
exports.login = async (req, res) => {

   const singup = new SignUp(req.body);
   await singup.login();
   req.session.user = singup.user;
   res.redirect("/home/index");


}

