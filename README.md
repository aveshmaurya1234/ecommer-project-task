# Simple E-commerce Product API

## Project Overview

Simple E-commerce Product API is a RESTful backend application built using Node.js, Express.js, and MongoDB. It allows users to manage products with complete CRUD operations, JWT-based authentication, multiple image uploads, category filtering, request validation, and centralized error handling.

---

## Features

* User Registration & Login
* JWT Authentication & Authorization
* Product CRUD Operations
* Multiple Image Uploads using Multer
* Category-Based Product Filtering
* Global Error Handling
* MongoDB Integration with Mongoose
* Environment Variable Configuration
* API Documentation

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* JSON Web Token (JWT)
* bcrypt
* dotenv

---

## Project Structure

```bash
ecommerce-product-api/
│
├── src/
│
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── product.controller.js
│   │
│   ├── middlewares/
│   │   ├── user.middleware.js
│   │   ├── error.middleware.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── product.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── product.routes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── ApiError.js
│   │   └── asyncHandler.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── POSTMAN_COLLECTION.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd ecommerce-product-api
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## Run the Project

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## Authentication Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Product Endpoints

### Get All Products

```http
GET /api/products
```

### Filter Products By Category

```http
GET /api/products?category=electronics
```

### Get Product By ID

```http
GET /api/products/:id
```

### Create Product

```http
POST /api/products
```

Authentication Required: Yes

### Update Product

```http
PUT /api/products/:id
```

Authentication Required: Yes

### Delete Product

```http
DELETE /api/products/:id
```

Authentication Required: Yes

---

## Image Upload

Use `form-data` in Postman.

Example:

| Key         | Type |
| ----------- | ---- |
| name        | Text |
| description | Text |
| price       | Text |
| category    | Text |
| images      | File |

For multiple image uploads, use the `images` field multiple times.

---

## Authorization

Protected routes require a valid JWT token.

Example:

```http
Authorization: Bearer <your_jwt_token>
```

---

## Validation

The API validates:

* Product Name
* Product Price
* Required Fields
* Valid Request Body
* User Registration Data
* User Login Data

---

## Error Handling

The API handles:

* Database Errors
* Validation Errors
* Authentication Errors
* Invalid Product IDs
* Missing Fields
* Invalid Tokens

---

## API Documentation

Detailed API documentation is available inside:

```bash
API_DOCUMENTATION.md
```

---