const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../uploads'))
    },
    filename: (req, file, cb) => {
        const newFilename = `${Date.now()} - ${file.originalname}`;
        cb(null, newFilename);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png')
    {
        cb(null, true);
    }
    else
    {
        cb(null, false);
    }
};

const uploadFile = multer( {storage: storage, fileFilter: fileFilter} );


module.exports = uploadFile;
