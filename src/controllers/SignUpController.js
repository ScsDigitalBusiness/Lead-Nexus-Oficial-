const SignUpModel = require("../models/SignupModel")
exports.signupIndex = (req,res) =>{
   res.render("singup");    
} 

exports.signupRegister =(req,res) =>{
    res.send(SignUpModel.create(req.body)); 
}