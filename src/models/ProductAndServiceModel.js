const mongoose = require('mongoose'); 

const ProductAndServiceSchema= mongoose.Schema({
  name: {type:String, required: true}, 
  category: {type:String,required: true }, 
  sku: {type:String, required:true}, 
  
})