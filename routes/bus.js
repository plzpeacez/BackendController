var express = require('express');
var givepos = require('./config/givepos');
var router = express.Router();

router.get('/', function(req, res, next){
    res.end('Node-Bus-Service');
});

router.post('/givepos',function(req,res){
    var lat = req.body.lat;
    var lon = req.body.lon;

    givepos.givepos(lat,lon,function (found) {
        console.log(found);
        res.json(found);
    });
});

module.exports = router;