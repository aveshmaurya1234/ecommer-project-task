import mongoose from "mongoose";
import ProductModel from "../models/product.model.js";


// CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        // multiple uploaded images
        const imageUrls = req.files.map(file => file.path);

        // --- Validation ---
        if (!name || !price || !category || imageUrls.length === 0) {
            return res.status(400).json({
                message: "Name, price, category, and images are required",
            });
        }   

        if(name.trim().length < 3) {
            return res.status(400).json({
                message: "Name must be at least 3 characters",
            });
        }

        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                message: "Price must be a positive number",
            });
        }


        const product = await ProductModel.create({
            name, description, price, category, images: imageUrls,
        });

        return res.status(201).json({
            message: "Product created successfully",
            data: product,
        });

    } catch (error) {
        return res.status(500).json({
        message: error.message,
        });
    }
};


// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    try {

        // default no filter, get all products // const filter = {category: req.query.category} // if category is present in query params then filter by category
        const filter = {}; 

        if (req.query.category) {
            filter.category = req.query.category; // e.g., /products?category=electronics
        }

        const products = await ProductModel.find(filter);

        return res.status(200).json({
            message: "Products fetched successfully",
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error: error.message,
        });
    }
};


// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        let {id} = req.params;
        let { name, description, price, category } = req.body;

        // --- Validation ---
        if (!id) {
            return res.status(400).json({
                message: "Product ID is required",
            });
        }

        // --- check id is valid mongoose ObjectId or not // and import mongoose ---
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        
        if (!name || !price || !category) {
            return res.status(400).json({
                message: "Name, price, and category are required",
            });
        }

        if(name.trim().length < 3) {
            return res.status(400).json({
                message: "Name must be at least 3 characters",
            });
        }

        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                message: "Price must be a positive number",
            });
        }

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { name, description, price, category },
            { new: true }
        );

        return res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });

    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error: error.message,
        });
    }
};


// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        let {id} = req.params;

        // --- Validation ---
        if (!id) {
            return res.status(400).json({
                message: "Product ID is required",
            });
        }

        // --- check id is valid mongoose ObjectId or not // and import mongoose ---
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        await ProductModel.findByIdAndDelete(id);

        return res.status(200).json({
        message: "Product deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error: error.message,
        });
    }
};


// GET SINGLE PRODUCT
const getProductById = async (req, res) => {
    try {
        let {id} = req.params;

        // --- Validation ---
        if (!id) {
            return res.status(400).json({
                message: "Product ID is required",
            });
        }

        // --- check id is valid mongoose ObjectId or not // and import mongoose ---
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        return res.status(200).json({
            message: "Product fetched successfully",
            data: product,
        });

    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error: error.message,
        });
    }
};


export {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProductById
}