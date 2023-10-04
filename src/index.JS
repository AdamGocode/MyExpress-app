// src/index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Hello Arkadians!');
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})