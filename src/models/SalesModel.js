const mongoose = require("mongoose"); 


const SalesSchema = mongoose.Schema({
    client: {type: String, required:true},
    email: {type: String, required:true},
    tel: {type: String, required:true},
    productCategory :  {type: String, required: true}, 
    productOurService : {type: String, required: true}, 
    process: {type:String, required : true}, 
    price: {type:String, required: true}, 
    weight:{type:String,required: true}, 
    descount: {type:String, required: true},  
    subtotal:{type:String,required:true},
    code : {type:String,required:true}, 
    payment:{type:String,required:true}, 
    status:{type:String, required:true}, 
    date: {type:String,required: true}, 
    saller: {type:String,required:true}, 

}) 

const SalesModel = mongoose.model("SalesModel",SalesSchema);   
class Sales {
    constructor(body) {
        this.body = body; 
        this.erros=  []; 
        this.sale= null; 
    }
 async create() {
     try {
        this.sal= SalesModel.create(this.body); 
     }catch(e) {
        throw new Error(e)
     }
 } 
 async getAllSales() {
    try {
        const sales = await SalesModel.find(); 
        return sales; 
    }catch(e) {
        throw new Error(e); 
    }

 } 
 async delete(id) {
    try {
        this.sale = await SalesModel.findByIdAndDelete({_id:id}); 
    }catch (e) {
        
        throw new Error(e); 
    }
 } 
 async edit(id) {
    try {
        this.sale = await SalesModel.findByIdAndUpdate({_id:id},this.body); 
    }catch(e) {
        throw new Error(e); 
    }
 }
} 
module.exports = Sales; 