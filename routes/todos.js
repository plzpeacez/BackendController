var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});
// connection.connect();

function checkAuth(req, res, next) {
    if (!req.session.user_id) {
        res.send('You are not authorized to view this page');
    } else {
        next();
    }
}

router.get('/my_secret_page', checkAuth, function (req, res) {
    res.send('if you are viewing this page it means you are logged in');
});

router.get('/todos', function (req, res, next) {
    // res.render('todos');
    // connection.connect();
    connection.query('SELECT * FROM authentication', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        console.log('Result is: ', results);
    });

    // connection.end();
});

router.post('/login', function (req, res) {
    var post = req.body;
    if (post.username == 'peace' && post.password == '1234') {
        // req.session.user_id = johns_user_id_here;
        // res.redirect('/my_secret_page');
        res.send(body);
    } else {
        res.send('Bad user/pass');
    }
});

module.exports = router;