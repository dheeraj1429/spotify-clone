const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');
const multer = require('multer');

const uploadMusic = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3') {
            cb(null, './uploads/music');
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: uploadMusic });

router.post('/upload', upload.single('file'), adminControllers.uploadMusic);
router.post('/getAllMusic', adminControllers.getAllMusic);

module.exports = router;
