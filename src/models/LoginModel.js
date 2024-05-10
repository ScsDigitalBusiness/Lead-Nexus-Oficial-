const mongoose = require("mongoose"); 


const LoginSchema=   mongoose.Schema({
   nome: {type:String, require:true}, 
   email: {type:String, require:true}, 
   password : {type:String, require:true}, 

})  
const LoginModel= mongoose.model("Users",LoginSchema) 
module.exports = LoginModel; 


