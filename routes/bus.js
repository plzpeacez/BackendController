var express = require('express');
var givepos = require('./config/givepos');
var router = express.Router();

var temp;

router.get('/', function(req, res, next){
    res.end('Node-Bus-Service');
});

router.post('/givepos',function(req,res){
    var lat = req.body.lat;
    var lon = req.body.lon;

    givepos.givepos(lat,lon,function (found) {
        console.log(found);
        res.json(found);
        temp = found;
    });
});

router.get('/givepos',function(req,res){
    res.json(temp);
});

router.post('/login', function (req, res) {
    var post = req.body;
    if (post.username == 'peace' && post.password == '1234') {
        // req.session.user_id = johns_user_id_here;
        // res.redirect('/my_secret_page');
        res.send('body');
    } else {
        res.send('Bad user/pass');
    }
});

module.exports = router;