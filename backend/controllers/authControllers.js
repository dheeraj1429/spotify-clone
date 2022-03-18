const User = require('../model/userModel');
const bcryptjs = require('bcryptjs');

// user signUp => Post
const userSignUp = async function (req, res, next) {
    try {
        const { name, email, password } = req.body.data;

        if (name && email && password) {
            const passwordHash = await bcryptjs.hash(password, 11);

            if (passwordHash) {
                const newUser = await new User({
                    name: name,
                    email: email,
                    password: passwordHash,
                });

                const userRef = await newUser.save();

                const token = await newUser.genrateUserToken();

                if (userRef) {
                    return res.status(201).json({
                        success: true,
                        message: 'user signup successful',
                        userData: token,
                    });
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: 'there is some problem!!!',
                });
            }
        }

        console.log(name, email, password);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    userSignUp,
};
