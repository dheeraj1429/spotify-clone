require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const conntion = require('./model/db');

// router files
const indexRouter = require('./routes/indexRoute');

app.get('/', indexRouter);

conntion(() => {
    // server start
    app.listen(port, () => {
        console.log('server runing');
    });
});
