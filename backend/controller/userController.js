const express = require('express');
const path = require('path');
const user = require('..model/user');
const router = express.Router();
const {upload} = require('../multer');
const ErrorHandler = require('../utils/errorHandler');
const { nextTick } = require('process');

// create user

router.post('/create-user', upload.single('file'), async (req, res) => {
    const {name, email, password} = req.body;
    const userEmail = await user.findOne({email});
    if (userEmail) {
        return nextTick(new ErrorHandler('User already exists', 400));
    }

const filename = req.file.filename;
const fileUrl = req.join(filename);
const user ={
    name :name,
    email : email,
    password : password,
    avatar: fileUrl,
};
console.log(user);
});        

module.exports = router;