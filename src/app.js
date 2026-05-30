import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();

// middlewares
app.use(express.json());

app.use("/api/products", productRoutes);


export default app;