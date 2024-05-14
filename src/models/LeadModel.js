const  mongoose =  require('mongoose'); 
const validator = require('validator'); 

const LeadSchema  =  mongoose.Schema({
     name: { type : String, required: true}, 
     tel: {type:String, required:true}, 
     email:{type:String, required:true}, 
     typeLead: {type: String, required: true}, 
     uf: {type:String, required:true}, 
     city: {type:String, required :true}, 
     date: {type:String, required:true}, 
     material: {type:String, required:true}, 
     typeOfMaterial: {type : String, required:true}, 
     process: {type:String, required: true}, 
     colaborator: {type:String, required: true} 

});
 
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

    async edit(id) {  
    this.lead = await LeadModel.findByIdAndUpdate(id,this.body, {new:true});

    }
   
   
}  
exports.Leads = Leads; 
  
exports.getLeads = async  () =>  {
    const leads = await LeadModel.find(); 
    return leads; 
} 
exports.getLeadsById =  async (id) =>{
     const lead = await LeadModel.findById(id);  
     return lead; 
} 

exports.deleteLead = async  (id) =>{
      const deleted =   await LeadModel.findByIdAndDelete(id); 
      return deleted; 
}