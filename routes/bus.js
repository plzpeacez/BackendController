var express = require('express');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var givepos = require('./config/givepos');
var database = require('./config/database');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'allbus' //database name
});

var temp;
var token;


// DATABASE CONNECTION UNCOMMENT IT
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

router.get('/', function (req, res, next) {
    res.end('Node-Bus-Service');
});

router.post('/givepos1', function (req, res) {
    var lat = req.body.lat;
    var lon = req.body.lon;
    var no = req.body.no;

    givepos.givepos(lat, lon, no, function (found) {
        console.log(found);
        res.json(found);
        temp = found;
    });
});

router.post('/givepos2', function (req, res) {
    var lat = req.body.lat;
    var lon = req.body.lon;
    var no = req.body.no;

    givepos.givepos(lat, lon, no, function (found) {
        console.log(found);
        res.json(found);
        temp = found;
    });
});

router.post('/givepos3', function (req, res) {
    var lat = req.body.lat;
    var lon = req.body.lon;
    var no = req.body.no;

    givepos.givepos(lat, lon, no, function (found) {
        console.log(found);
        res.json(found);
        temp = found;
    });
});

router.get('/givepos', function (req, res) {
    res.json(temp);
});

router.get('/base', function (req, res) {
    database.login('1234', '1234', '1234')
});

router.post('/login', function (req, res) {
    var post = req.body;
    if (post.username == 'peace' && post.password == '1234') {
        // req.session.user_id = johns_user_id_here;
        // res.redirect('/my_secret_page');
        // res.send('body');
        // token = jwt.sign(user, app.get('superSecret'), {
        //   expiresInMinutes: 1440 // expires in 24 hours
        // });
        token = jwt.sign({ foo: 'bar' }, 'shhhhh', {
            expiresIn: '24h'
        });
        res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
        });
    } else {
        res.send('Bad user/pass');
    }
});

module.exports = router;