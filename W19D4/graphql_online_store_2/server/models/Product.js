const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: false
  }
});

ProductSchema.post("save", product => {
  const Category = mongoose.model("category");
  Category.findById(product.category)
    .then(category => {
      category.products.push(product);
      category.save();
    });
});

ProductSchema.pre("deleteOne", function() {
  const Product = mongoose.model("product");
  const Category = mongoose.model("category");
  
  Product.findById(this.getFilter())
    .then(product => {
      Category.findById(product.category)
        .then(category => {
          category.products.pull(product);
          category.save();
        });
    });
});

ProductSchema.statics.updateProductCategory = (productId, categoryId) => {
  const Product = mongoose.model("product");
  const Category = mongoose.model("category");

  return Product.findById(productId).then(product => {
    if (product.category) {
      Category.findById(product.category).then(oldcategory => {
        oldcategory.products.pull(product);
        return oldcategory.save();
      });
    }
    product.category = categoryId;
    return product.save();
    // return Category.findById(categoryId).then(newCategory => {
    //   product.category = newCategory;
    //   newCategory.products.push(product);

      // return Promise.all([product.save()]).then(
      //   ([product]) => product
      // );
    // });
  });
};

module.exports = mongoose.model("product", ProductSchema);