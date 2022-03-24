const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cart = require('../cart');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the user name'],
    },
    email: {
        type: String,
        required: [true, 'please enter the user email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please enter the user password'],
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    tokens: [
        {
            token: {
                type: String,
                required: [true, 'user token required'],
            },
        },
    ],
    isAdmin: {
        type: String,
        default: 'user',
    },
});

userSchema.methods.genrateUserToken = async function () {
    try {
        const token = await jwt.sign({ name: this.name, email: this.email }, cart.KEY);

        this.tokens = this.tokens.concat({ token });

        this.save();

        return token;
    } catch (err) {
        console.log(err);
    }
};

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
