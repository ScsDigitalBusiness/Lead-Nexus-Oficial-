const mongoose = require('mongoose');

const ProductAndServiceSchema = mongoose.Schema({

  name: { type: String, required: true }, 
  productPhoto:{type:String,required:false}, 
  category: { type: String, required: true },
  process: { type: String, required: true },
  sku: { type: String, required: false },
  weight: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: false },
  description: { type: String, required: true },
  date: { type: String, required: true },

});
const ProductAndServiceModel = mongoose.model("ProductAndServiceModel", ProductAndServiceSchema);
class Product {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.product = null;
  }
  async create() {
    try {
      this.product = await ProductAndServiceModel.create(this.body);
    } catch (e) {
      throw new Error(e);
    }
  }
  async getProducts() {
    try {
      const products = await ProductAndServiceModel.find();
      return products;

    } catch (e) {
      throw new Error(e);
    }
  }
  async getProductById(id) {
    try {
      const product = await ProductAndServiceModel.findById(id);
      return product;
    } catch (e) {
      throw new Error(e);
    }

  }
  async getPorductByIdAndUpate(id) {
    try {
      this.product = await ProductAndServiceModel.findByIdAndUpdate(id, this.body);
    } catch (e) {
      throw new Error(e);
    }
  }
  async getProductByIdAndDelete(id) {
    try {
      this.product = await ProductAndServiceModel.findByIdAndDelete({ _id: id });
    } catch (e) {
      throw new Error(e);
    }
  }
}
module.exports = Product;