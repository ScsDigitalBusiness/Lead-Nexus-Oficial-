const mongoose = require("mongoose"); 
const validator = require('validator'); 


const SignupSchema=   mongoose.Schema({
   nome: {type:String, require:true}, 
   email: {type:String, require:true}, 
   password : {type:String, require:true}, 
   passwordConfirmed : {type:String, require:true}, 
   

}); 
const SignupModel=  mongoose.model("SignUp",SignupSchema); 


class SignUp {
     constructor(body) {
       this.body = body;    
       this.errors= []; 
       this.user = null; 
      } 
   validation() {
      this.cleanUP(); 
      if(!validator.isEmail(this.body.email)) this.errors.push("E-mail incorreto !");  

 
      if(this.body.password < 3 )this.errors.push("Senha incorreta, precistar ter no minimo 4 caraceters");  
   } 
   register()  {

   } 
   cleanUP() {
      for(let key in this.body) {
         if( typeof this.body[key]!== "string") {
            this.body[key] = ""; 
         }
      }
   }
}


module.exports= SignupModel; 



