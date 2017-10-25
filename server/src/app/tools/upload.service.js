const multer = require('multer');
const cloudinaryStorage = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary');

let storage;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
  cloudinary.config();
  storage = cloudinaryStorage({
    cloudinary,
    filename: (req, file, cb) => {
      cb(undefined, file.originalname);
    },
  });
}

if (process.env.NODE_ENV === 'production') {
  const storagePath = '/home/cifppaseodaspontes/eduhostalaria/images';
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, storagePath);
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}-${new Date()}`);
    },
  });
}

const parser = multer({ storage });

module.exports = parser;
