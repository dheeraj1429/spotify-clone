const mongoose = require('mongoose');
const cart = require('../cart');

const conntion = function (callBack) {
    mongoose
        .connect(cart.DBURL)
        .then((resutl) => {
            console.log('connected');

            callBack();
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = conntion;
