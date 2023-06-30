const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
