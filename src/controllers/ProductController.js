const Product =  require("../models/ProductAndServiceModel")
exports.indexProduct =  async (req,res) =>{ 
  const productModel = new Product(req.body); 
  const allProducts = await productModel.getProducts(); 
  res.render("Product",{allProducts});    
} 
exports.createProduct=  async (req,res) =>{
  const productModel = new Product(req.body); 
  await  productModel.create(); 
  res.redirect("/product/index/")
}