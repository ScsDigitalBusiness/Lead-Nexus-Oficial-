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
exports.editPage =  async (req,res) => {  
  const productModel = new Product(req.body); 
  const productFinded =   await   productModel.getProductById(req.params.id);  
  res.render("EditProduct",{productFinded}); 
} 
exports.editProduct = async (req,res) =>{ 
  const productModel = new Product(req.body); 
  await   productModel.getPorductByIdAndUpate(req.params.id); 
  res.redirect("/product/index/"); 
} 
exports.deleteProduct = async (req,res) =>{
  const productModel = new Product(req.body); 
  await  productModel.getProductByIdAndDelete(req.params.id);  
  res.redirect("back")
  
} 