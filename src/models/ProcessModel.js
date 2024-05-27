const mongoose = require('mongoose'); 

const ProcessSchema = mongoose.Schema({
    process:{type:String, required : true}, 
    colaborator:{type:String, required : true}, 

}) 

const ProcessModel=  mongoose.model('ProcessModel', ProcessSchema); 
class Process {
    constructor(body)  {
        this.body = body; 
        this.errors= []; 
        this.process= null; 
    } 

    async create() {
        try {
            this.process = await ProcessModel.create(this.body); 
        }catch(e) {
            throw new Error(e); 
        }
    } 
    async getAllProcess() { 
        try {
            const allProcess = await ProcessModel.find(); 
            return allProcess;
        }catch(e) {
            throw new Error(e); 
        }
      
    }
} 
module.exports = Process; 
