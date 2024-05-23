const { Leads, getLeads } = require("../models/LeadModel");
const { SignUp} = require("../models/SignupModelAndLoginModel");

exports.signupIndex = (req, res) => {
   res.render("singup");
}

exports.loginIndex = async (req, res) => {
   const signup = new SignUp(req.body); 
   const leads = new Leads(req.body,req.session.user);  
   console.log(req.body,req.session.user) 
   const allUsers = await signup.getAllUsers();
   const allLeads = await leads.getLeads();
   if (req.session.user)  return res.render('Home', { allLeads, allUsers });
   res.render("Login");
}
exports.signupRegister = async (req, res) => {
   const singUp = new SignUp(req.body);
   await singUp.register();
   if (singUp.errors.length > 0) { 
      req.flash("erros",singUp.errors); 
      req.session.save(() => res.redirect('back'));
   }else{ 
      req.session.save(()=>{
         req.flash("sucess","Conta criada com Sucesso!"); 
         return res.redirect("/"); 
         
      }) 
      return;
  }
}
exports.login = async (req, res) => {
   const singup = new SignUp(req.body);
   await singup.login(); 
   if(singup.errors.length > 0) {
      req.flash("erros",singup.errors); 
      req.session.save(()=>{
        return res.redirect('back'); 
      })  
    return
   }else { 
    req.session.user = singup.user;
    return res.redirect("/home/index"); 
   }
}

