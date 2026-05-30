import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


// REGISTER USER
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // --- Validation ---
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email, and password are required",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" })
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email",
            });
        }


        if (password.trim().length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" })
        }

        // Hash password implementation in model using pre save hook, so we can directly save the user without hashing here

        // Create user
        const user = await UserModel.create({
            name, email, password,
        });

        // Generate token and set in cookie
        let token = generateToken(user._id);
        res.cookie("token", token, { httpOnly: true });
        

        return res.status(201).json({
            message: "User registered successfully",
            user,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


// LOGIN USER
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // --- Validation ---
        if ( !email || !password) {
            return res.status(400).json({
                message: "email, and password are required",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" })
        }

        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({
                message: "User not found with this email",
            });
        }


        if (password.trim().length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" })
        }


        // Compare password
        const isMatch = await existingUser.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        // Generate token
        const token = generateToken(existingUser._id);

        return res.status(200).json({
            message: "Login successful",
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export {
    registerUser,
    loginUser,
}