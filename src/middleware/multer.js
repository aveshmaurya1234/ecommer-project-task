const multer = require("multer");

// // for disk storage
// let storage = multer.diskStorage({  
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });

// for memory storage use when you want to send file to cloud storage like imagekit, cloudinary etc
let storage = multer.memoryStorage()

let upload = multer({ storage: storage });

module.exports = upload;