# Simple E-commerce Product API

## Project Overview

This is a backend REST API for managing e-commerce products using Node.js, Express.js, MongoDB, and Multer.

Features:

* Product CRUD operations
* JWT Authentication
* Multiple image uploads
* Category filtering
* Validation
* Error handling

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* JWT
---

## Installation

```bash
git clone <repository-url>
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## Run Server

```bash
npm run dev
```

---

## API Endpoints

### Get All Products

```http
GET /api/products
```

### Get Product By ID

```http
GET /api/products/:id
```

### Create Product

```http
POST /api/products
```

### Update Product

```http
PUT /api/products/:id
```

### Delete Product

```http
DELETE /api/products/:id
```

---

## Image Upload

Use `form-data` and send:

* images

---