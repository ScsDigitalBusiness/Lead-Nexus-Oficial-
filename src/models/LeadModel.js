const  mongoose =  require('mongoose'); 
const validator = require('validator'); 

const LeadSchema  =  mongoose.Schema({
     name: {type : String, require: true}, 
     tel: {type:String, require:true}, 
     email:{type:String, require:true}, 
     typeLead: {type: String, require: true}, 
     uf: {type:String, require:true}, 
     city: {type:String, require :true}, 
     date: {type:String, require:true}, 
     material: {type:String, require:true}, 
     typeOfMaterial: {type : String, require:true}, 
     process: {type:String, require: true}, 
     colaborator: {type:String, require: true} 

}) 
 
const  LeadModel = mongoose.model("Leads",LeadSchema); 

class Leads {
    constructor(body)  {
        this.body = body; 
         this.errors = []; 
         this.lead=  null; 
    } 

   async createLead() { 
     if(!validator.isEmail(this.body.email)) this.errors.push("Email Inválido !");  
      this.lead = await LeadModel.create(this.body); 
    } 
   
}  
exports.Leads = Leads; 
  
exports.getLeads = async  () =>  {
    const leads = await LeadModel.find(); 
    return leads; 
}