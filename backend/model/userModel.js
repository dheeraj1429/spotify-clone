const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const KEY = 'SAIDBASNIUBIUB@^*&@!^#(@U#!VBIJKB!@(*Y(8y9b181yu2v82h21';

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
});

userSchema.methods.genrateUserToken = async function () {
    try {
        const token = await jwt.sign({ name: this.name, email: this.email }, KEY);

        this.tokens = this.tokens.concat({ token });

        this.save();

        return token;
    } catch (err) {
        console.log(err);
    }
};

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
