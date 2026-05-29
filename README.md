ecommerce-api/
├── config/              # Database connection and environment variables
│   └── db.js
├── controllers/         # Business logic for requests
│   ├── categoryController.js
│   └── productController.js
├── middlewares/         # Authentication and file upload handlers
│   ├── authMiddleware.js
│   └── uploadMiddleware.js
├── models/              # Database schemas
│   ├── Category.js
│   └── Product.js
├── routes/              # Route definitions linking to controllers
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── uploads/             # Directory where uploaded images will be stored
├── .env                 # Environment secrets (JWT, DB URI, Port)
├── package.json         # Project dependencies
└── server.js            # Main application entry point