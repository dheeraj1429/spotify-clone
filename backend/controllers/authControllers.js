const User = require('../model/userModel');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const cart = require('../cart');
const fs = require('fs');
const rootFolder = require('../util/rootFolder');
const path = require('path');
const jwt = require('jsonwebtoken');

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
                        name: userRef.name,
                        email: userRef.email,
                        admin: userRef.isAdmin,
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
                    name: findUserRef.name,
                    email: findUserRef.email,
                    admin: findUserRef.isAdmin,
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

// forget password
const forgetPassword = async function (req, res, next) {
    try {
        const email = req.body.data;

        if (email) {
            const userFindInDb = await User.findOne({ email });

            const tokenGenrate = await jwt.sign(
                {
                    id: userFindInDb._id,
                    name: userFindInDb.name,
                    email: userFindInDb.email,
                },
                cart.KEY
            );

            fs.readFile(
                path.join(rootFolder, 'views', 'tamplates', 'mail.ejs'),
                'utf-8',
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        const output = data.replace(
                            '<a href="#">reset password</a>',
                            `<a href="http://localhost:3000/user-account/reset-password/${tokenGenrate}">reset password</a>`
                        );

                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: cart.EMAIL,
                                pass: cart.PASS,
                            },
                        });

                        const mailoption = {
                            from: cart.EMAIL,
                            to: email,
                            subject: 'rest password',
                            text: 'rest-password request',
                            html: output,
                        };

                        transporter.sendMail(mailoption, function (err, data) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('mail send');
                            }
                        });
                    }
                }
            );
        } else {
            console.log('email is required');
        }
    } catch (err) {
        console.log(err);
    }
};

// reset password request
const userResetPasswordRequest = async function (req, res, next) {
    try {
        const { id, password } = req.body.data;

        const varifyUser = await jwt.verify(id, cart.KEY);

        if (varifyUser) {
            const hashingPassword = await bcryptjs.hash(password, 11);

            const userUpdateDataDb = await User.updateOne(
                { _id: varifyUser.id, name: varifyUser.name, email: varifyUser.email },
                { $set: { password: hashingPassword } }
            );

            if (userUpdateDataDb) {
                return res.status(200).json({
                    success: true,
                    message: 'password reset successful',
                });
            } else {
                return res.status(200).json({
                    success: false,
                    message: 'somthing worng',
                });
            }
        } else {
            console.log('somthing worng!!');
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    userSignUp,
    userLogin,
    forgetPassword,
    userResetPasswordRequest,
};
