const Category = require("../models/CategoryMOdel");  

exports.createCategory = async (req,res) => {
   const category =  new Category(req.body); 
   await category.create(); 
   res.redirect("back"); 
} 
