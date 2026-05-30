import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/user.routes.js";
import cookieparser from "cookie-parser";

const app = express();
app.use(cookieparser());

// middlewares
// handel json data
app.use(express.json())
// handel form data 
app.use(express.urlencoded({extended: true}))
app.use(express.static("public")) // for serve static files like images

// routes
app.get("/", (req, res) => {
    res.status(200).send("Welcome to E-Commerce API");
});
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);


export default app;