const { SignUp } = require("../models/SignupModelAndLoginModel");

exports.indexAllUsers =  async (req,res)=>{   
 if(req.session.user.office==="Administrador") {
    const signup = new SignUp(req.body); 
    const allUsers = await signup.getAllUsers();
     res.render("AllUsers",{allUsers});   
 }
 
} 
exports.editUserPermission = async (req,res) =>{ 
    const signup = new SignUp(req.body);   
    await  signup.editPermissionsOfUser(req.params.id); 
   res.redirect("/allUsers/index/"); 
      
} 
exports.deleteUser = async (req,res) =>{
   const signup = new SignUp(req.body); 
   await  signup.deleteUser(req.params.id);  
   res.redirect("/allUsers/index/"); 

}