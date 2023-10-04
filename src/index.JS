// src/index.js

const express = require('express');
const router = require('./api/users/user.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(router);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})