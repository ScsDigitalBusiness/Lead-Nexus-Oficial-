const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: { type: String, required: true },
    colaborator: { type: String, required: true },
})

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);

class Category {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.category = null;
    }
    async create() {
        try {
            this.category = await CategoryModel.create(this.body);
        } catch (e) {
            throw new Error(e);
        }
    }
    async getAllCategory() {
        try {
            const categories = await CategoryModel.find();
            return categories;
        } catch (error) {
            throw new Error(error);
        }
    }
    
}
module.exports = Category; 