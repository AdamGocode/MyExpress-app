const User = require('./userModel');

const registerUser = (req, res) => {
 let {name, email, password} = req.body;

 const users = new User({
    name : name,
    email : email,
    password : password
 });

 const getUsers = async (req, res) => {
    User.find()
    console.log(users)
    res.json(users);
 };

 module.exports = {getUsers, registerUser};