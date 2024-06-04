const Product = require("../models/ProductAndServiceModel")
const Category = require("../models/CategoryMOdel");
const { SignUp } = require("../models/SignupModelAndLoginModel");
const Process = require("../models/ProcessModel");
const  {PhotoProfile} = require('../models/ProfilePhotosModel'); 
exports.indexProduct = async (req, res) => {
  const productModel = new Product(req.body);
  const signup = new SignUp(req.body);
  const category = new Category(req.body);
  const process = new Process(req.body);
  const allProducts = await productModel.getProducts();
  const allUsers = await signup.getAllUsers();
  const categories = await category.getAllCategory();
  const allProcess = await process.getAllProcess(); 
  const profilePhoto = new PhotoProfile();   
  const userPhoto =   await  profilePhoto.getUserPhoto(req.session.user._id) 
  console.log(userPhoto);  
  res.render("Product", { userPhoto,allProducts, categories, allUsers, allProcess });
}
exports.createProduct = async (req, res) => {
  const productModel = new Product(req.body);
  await productModel.create();
  res.redirect("/product/index/")
}
exports.editPage = async (req, res) => {
  const productModel = new Product(req.body);
  const productFinded = await productModel.getProductById(req.params.id);
  res.render("EditProduct", { productFinded });
}
exports.editProduct = async (req, res) => {
  const productModel = new Product(req.body);
  await productModel.getPorductByIdAndUpate(req.params.id);
  res.redirect("/product/index/");
}
exports.deleteProduct = async (req, res) => {
  const productModel = new Product(req.body);
  await productModel.getProductByIdAndDelete(req.params.id);
  res.redirect("back")

} 