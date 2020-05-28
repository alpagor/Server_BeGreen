const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "BeGreen profiles pictures",
  allowedFormats: ["png", "jpg", "jppeg", "gif"],

  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same  name as the original file name
  },
});

const parser = multer({ storage: storage });

//   app.post('/upload', parser.single('image'), function (req, res) {
//     res.json(req.file);
//   });

module.exports = parser;
