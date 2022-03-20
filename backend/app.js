require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const conntion = require('./model/db');
const session = require('express-session');
const path = require('path');

// halper funtions
const rootFolder = require('./util/rootFolder');

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
app.use(express.static(path.join(rootFolder, 'public')));

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
