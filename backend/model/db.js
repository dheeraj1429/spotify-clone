const mongoose = require('mongoose');

const conntion = function (callBack) {
    mongoose
        .connect('mongodb://localhost:27017/shpotify-clone')
        .then((resutl) => {
            console.log('connected');

            callBack();
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = conntion;
