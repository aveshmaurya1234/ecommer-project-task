import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        price: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        images: {
            type: [String],
            default: [],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;