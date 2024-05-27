const mongoose = require('mongoose'); 

const ProductAndServiceSchema= mongoose.Schema({
  
  name: {type:String, required: true}, 
  category: {type:String,required: true },  
  process: {type:String, required:true}, 
  sku: {type:String, required:false},  
  weight: {type: String, required: true}, 
  brand: {type: String, required: false},  
  description: {type:String, required: true}, 
  date: {type:String, required: true}, 

}); 

const ProductAndServiceModel = mongoose.model("ProductAndServiceModel",ProductAndServiceSchema); 
