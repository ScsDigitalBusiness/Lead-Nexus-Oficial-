
exports.loginIndex = (req,res) => {
    res.render('Login');    
} 
exports.loginRegister = (req,res) =>{
   res.send(LoginModel.create(req.body))   
}