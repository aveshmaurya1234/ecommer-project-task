# API Documentation

# Base URL

```http
http://localhost:3000
```

---

# 1. Get All Products

## Endpoint

```http
GET /api/products
```

## Query Params

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| category  | string | Filter by category |

## Example

```http
GET /api/products?category=electronics
```

## Response

```json
[
  {
    "_id": "123",
    "name": "Laptop",
    "price": 50000,
    "category": "electronics",
    "images": []
  }
]
```

---

# 2. Get Product By ID

## Endpoint

```http
GET /api/products/:id
```

## Response

```json
{
  "_id": "123",
  "name": "Laptop",
  "price": 50000
}
```

---

# 3. Create Product

## Endpoint

```http
POST /api/products
```

## Body Type

form-data

## Fields

| Key         | Type   |
| ----------- | ------ |
| name        | string |
| description | string |
| price       | number |
| category    | string |
| images      | file[] |

## Response

```json
{
  "message": "Product created successfully"
}
```

---

# 4. Update Product

## Endpoint

```http
PUT /api/products/:id
```

---

# 5. Delete Product

## Endpoint

```http
DELETE /api/products/:id
```


---

# Error Responses

## Product Not Found

```json
{
  "message": "Product not found"
}
```
