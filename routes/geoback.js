var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// parse application/json
router.use(bodyParser.json({ type : '*/*' })); // force json

router.post('/', function(req, res, next){
    console.log('Headers:\n', req.headers);
    console.log('Body:\n', req.body);
    console.log('------------------------------');
    res.sendStatus(200);
});

module.exports = router;