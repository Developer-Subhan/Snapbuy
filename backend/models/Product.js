const mongoose = require("mongoose");

const productSchema = new mongoose.Schema([{
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number, 
    required: true,
  },
  images: [
    {
      src: String,
      alt: String,
    },
  ],
  colors: [
    {
      id: String,
      name: String,
      classes: String,
    },
  ],
  sizes: [
    {
      name: String,
      inStock: Boolean,
    },
  ],
  description: {
    type: String,
  },
  highlights: [String],
  details: {
    type: String,
  },
}]);


productSchema.pre("save", function (next) {
  if (this.colors && this.colors.length > 0) {
    this.colors = this.colors.map((color) => {
      const id = color.name.trim().toLowerCase(); 
      return {
        ...color,
        id,
        classes: `bg-${id} checked:outline-${id}`, 
      };
    });
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
