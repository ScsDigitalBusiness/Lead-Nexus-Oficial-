const mongoose = require("mongoose");
const SignupModel = require("../models/SignupModelAndLoginModel"); 

class Settings {
    constructor( body) {
        this.body = body; 
         
    } 
    async updateProfile (id) {
        this.body  = await  SignupModel.findByIdAndUpdate(id,this.body,{new: true}); 
 
     }
} 

exports.SettingsModel = Settings; 