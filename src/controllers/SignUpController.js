const SignUp = require("../models/SignupModel")
exports.signupIndex = (req,res) =>{
   res.render("singup");    
} 

exports.signupRegister = async (req,res) =>{
    const singUp = new SignUp(req.body);  
     await  singUp.register(); 
     res.send(singUp.user); 


        
} 
exports.login = async (req,res) =>{
  const singup = new SignUp(req.body); 
  if(singup.errors.length ===0) {
      await singup.login(); 

  } 
  res.send(singup.errors); 

}