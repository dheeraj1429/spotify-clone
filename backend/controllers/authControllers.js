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

// user login
const userLogin = async function (req, res, next) {
    try {
        const { email, password } = req.body.data;

        const findUserRef = await User.findOne({ email });

        if (findUserRef) {
            const passwordVarif = await bcryptjs.compare(password, findUserRef.password);

            const token = await findUserRef.genrateUserToken();

            if (passwordVarif) {
                return res.status(200).json({
                    success: true,
                    message: 'login successfull',
                    userData: token,
                });
            } else {
                return res.status(200).json({
                    success: false,
                    message: 'password is worng',
                });
            }
        } else {
            return res.status(200).json({
                success: false,
                message: 'no use find!!',
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    userSignUp,
    userLogin,
};
