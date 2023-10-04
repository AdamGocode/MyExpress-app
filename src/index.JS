// src/index.js

const express = require('express');
const router = require('./api/users/userRoutes.js');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDb = require('../src/config/db.js')

connectDb()

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});