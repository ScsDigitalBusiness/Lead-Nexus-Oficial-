const mongoose = require('mongoose'); 

const ProductAndServiceSchema= mongoose.Schema({
  name: {type:String, required: true}, 
  category: {type:String,required: true }, 
  description: {type:String, required: true}, 
  sku: {type:String, required:true},  
  weight: {type: String, required: true}, 
  brand: {type: String, required: false},  
  date: {type:String, required: true}, 

})