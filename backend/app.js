require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const conntion = require('./model/db');
const session = require('express-session');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: '!@DEJ1/()-!)Uh!u8@98@',
        resave: false,
        saveUninitialized: false,
    })
);

app.set('view engine', 'ejs');

// router files
const auth = require('./routes/authRoute');

// route
app.use('/user', auth);

conntion(() => {
    // server start
    app.listen(port, () => {
        console.log('server runing');
    });
});
