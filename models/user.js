const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    fname: String,
    lname: String,
    age: Number
})

var user = mongoose.model('users', userSchema);

module.exports = user;