const express = require('express');
const router = express.Router();
const {registerUser, getUsers} = require('../users/userController');



router.post("/register", registerUser);

router.get("/register", getUsers);


module.exports = router;

