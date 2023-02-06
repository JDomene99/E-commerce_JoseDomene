import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
    },
    price: {
      type: Number,
    },
    img: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
    size: {
      type: Array,
    },
    category: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false, // para que no aparezca el __V
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
