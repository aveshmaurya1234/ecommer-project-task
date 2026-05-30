import express from "express";
import upload from "../middleware/multer.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProductById,
} from "../controllers/product.controller.js";


const router = express.Router();


/**
 * @route POST /api/products/
 * @desc Create a new product need name and price in the request body and images in form-data
 * @access Public
 */
router.post("/", authMiddleware, upload.array("images", 5), createProduct);


/**
 * @route GET /api/products/
 * @desc Get all products with optional category filtering (e.g., /products?category=electronics)
 * @access Public
 */
router.get("/", getAllProducts);


/**
 * @route GET /api/products/:id
 * @desc Get a single product by ID
 * @access Public
 */
router.get("/:id", getProductById);


/**
 * @route PUT /api/products/:id
 * @desc Update a product by ID, can update name, description, price, category and images (images should be sent in form-data)
 * @access Public
 */
router.put("/:id", authMiddleware, updateProduct); 


/**
 * @route DELETE /api/products/:id
 * @desc Delete a product by ID
 * @access Public
 */
router.delete("/:id", authMiddleware, deleteProduct );

export default router;