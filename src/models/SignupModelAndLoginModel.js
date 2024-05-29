const mongoose = require("mongoose");
const validator = require('validator');


const SignupSchema = mongoose.Schema({
   nome: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   passwordConfirmed: { type: String, required: true },
   userImg: { type: String },
});

const SignupModel = mongoose.model("SignUp", SignupSchema);


class SignUp {
   constructor(body) {
      this.body = body;
      this.errors = [];
      this.user = null;
   }
   async userExist() {
      try {
         const existUser = await SignupModel.findOne({ email: this.body.email });
         if (existUser) this.errors.push("Já possui uma conta com esse E-mail!");

      } catch (e) {
         throw new Error(e);
      }

   }
   validation() {
      this.cleanUP();
      if (!validator.isEmail(this.body.email)) this.errors.push("E-mail incorreto !");
      this.userExist();
      if (this.body.password < 3) this.errors.push("Senha inválida, precistar ter no minimo 4 caraceters");
      if (this.body.password !== this.body.passwordConfirmed) this.errors.push("Senhas não conferem!");
   }
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
   async login() {
      try {
         this.user = await SignupModel.findOne({ email: this.body.email, password: this.body.password });
         if (!this.user) this.errors.push("Usuário não existe !");

      } catch (e) {
         throw new Error(e);
      }
   }
   cleanUP() {
      for (let key in this.body) {
         if (typeof this.body[key] !== "string") this.body[key] = "";

      }
   }
   async updateProfile(id) {
      const profileUpdated = await SignupModel.findByIdAndUpdate(id, this.body, { new: true });
      return profileUpdated;
   }
   async getAllUsers() {
      const allUsers = await SignupModel.find();
      return allUsers;
   }
}



exports.SignUp = SignUp;





