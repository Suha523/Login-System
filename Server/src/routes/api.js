const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/user', function (req, res) {
    res.send(req.session.username);
});

router.post('/signup', function (req, res) {
    let registrationInfo = req.body;
    let newUser = new User(registrationInfo);
    newUser.save();
    res.end();
});

router.post('/login', async function (req, res) {
    let loginData = req.body;
    req.session.username = loginData.username;
    let username = req.session.username;
    req.session.password = loginData.password;
    let password = req.session.password;

    let userId = '';
    let status = '';
    let userInfo = await User.findOne({ username: username });
    if (userInfo !== null && userInfo.password === password) {
        userId = JSON.stringify(userInfo._id);
        status = 'Done';
    } else {
        status = 'Not Found';
    }
    let userStatus = {
        username: username,
        userId: userId,
        status: status,
    };

    res.send(userStatus);
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('Done Deleted');
});


module.exports = router;