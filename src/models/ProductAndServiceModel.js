const mongoose = require('mongoose');

const ProductAndServiceSchema = mongoose.Schema({

  name: { type: String, required: true },
  category: { type: String, required: true },
  process: { type: String, required: true },
  sku: { type: String, required: false },
  weight: { type: String, required: true },
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
    const products = await ProductAndServiceModel.find();
    return products;
  }
}
module.exports = Product;