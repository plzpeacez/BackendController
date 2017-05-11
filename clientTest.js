var querystring = require('querystring');
var request = require('request');

var form = {
    lat: '1234',
    lon: '1234',
    no: '1'
};

var formData = querystring.stringify(form);
// var contentLength = formData.length;

request({
    headers: {
        // 'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'http://128.199.195.185/api/v2/givepos2',
    body: formData,
    method: 'POST'
}, function (err, res, body) {
    //it works!
    if (err) {
        console.log(err);
    }
    console.log("Works");
});