import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";

const app = express();

// middlewares
app.use(express.json());


export default app;