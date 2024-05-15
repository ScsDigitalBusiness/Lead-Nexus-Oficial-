const mongoose = require("mongoose");
const validator = require('validator');


const SignupSchema = mongoose.Schema({
   nome: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   passwordConfirmed: { type: String, required: true },
   userImg: { type: String },


});

const  SignupModel = mongoose.model("SignUp", SignupSchema);


class SignUp {
   constructor(body) {
      this.body = body;  
      this.errors = [];
      this.user = null;
   }

   async userExist() {
      try {
         const existUser = await SignupModel.findOne({ email: this.body.email });
         if (existUser) this.errors.push("Usuário já existe !");

      } catch (e) {
         throw new Error(e);
      }

   }
   validation() {
      this.cleanUP();
      if (!validator.isEmail(this.body.email)) this.errors.push("E-mail incorreto !");
      this.userExist();

      if (this.body.password < 3) this.errors.push("Senha inválida, precistar ter no minimo 4 caraceters");
   }
   //Regsiter Method 
   async register() {
      this.validation();
      if (this.errors.length === 0) {
         try {
            const user = await SignupModel.create(this.body);

         } catch (e) {
            throw new Error(e);

         }
      }

   }
   //Login method
   async login() {
      try {
         this.user = await SignupModel.findOne({ email: this.body.email, password: this.body.password });
         if (!this.user) {
            this.errors.push("User não existe");
         }
      } catch (e) {
         throw new Error(e);
      }
   }
   cleanUP() {
      for (let key in this.body) {
         if (typeof this.body[key] !== "string") {
            this.body[key] = "";
         }
      }
   }  
  
   
}

exports.getAllUsers = async () => {
   const allUsers = await SignupModel.find();
   return allUsers;
}
exports.SignUp = SignUp;  
exports.SignupModel = SignupModel; 




