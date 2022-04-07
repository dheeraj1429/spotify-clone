const mongoose = require("mongoose");

const url = `mongodb+srv://dheeraj:OooMwFtsMVQYCkL4@cluster0.sqtil.mongodb.net/spotify-clone?retryWrites=true&w=majority`;
const pass = "OooMwFtsMVQYCkL4";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const conntion = function (callBack) {
    mongoose
        .connect(url, connectionParams)
        .then((resutl) => {
            console.log("connected");
            callBack();
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = conntion;
