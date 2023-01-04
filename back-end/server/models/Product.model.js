import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    nameProduct: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    weight: { type: String, require: true },
    category: { type: Array, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
