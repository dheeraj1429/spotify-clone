require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const conntion = require('./model/db');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cart = require('./cart');

// halper funtions
const rootFolder = require('./util/rootFolder');

app.set('view engine', 'ejs');
app.use(express.static(path.join(rootFolder, 'public')));
app.use(express.static(path.join(rootFolder, 'uploads')));

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: cart.SCRET,
        resave: false,
        saveUninitialized: false,
    })
);

// router files
const auth = require('./routes/authRoute');
const index = require('./routes/indexRoute');

// route
app.use('/user', auth);
app.use('/music', index);

conntion(() => {
    // server start
    app.listen(port, () => {
        console.log('server runing');
    });
});
