const SignUp = require("../models/SignupModelAndLoginModel")
exports.signupIndex = (req,res) =>{
   res.render("singup");    
} 
  
exports.loginIndex = (req,res) =>{
   res.render("Login"); 
}
exports.signupRegister = async (req,res) =>{
    const singUp = new SignUp(req.body);  
     await  singUp.register(); 
     res.redirect("/")


        
} 
exports.login = async (req,res) =>{
  const singup = new SignUp(req.body); 
   await singup.login();  
   res.redirect("/home/index/"); 

}