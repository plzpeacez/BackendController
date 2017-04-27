var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'allbus' //database name
});

var id = "1";
var position = null;
var obj = [];
var isNo = false;

exports.givepos = function (lat, lon, no, callback) {

    position = {
        position_latitude: lat,
        position_longitude: lon
    };

    if (lat != null) {
        // UPDATE VALUES IN DATABASE UNCOMMENT IT
        // connection.query('UPDATE position set ? WHERE Position_id = ? ', [position, id], function (err, rows, fields) {
        //     if (err) throw err

        //     console.log('Complete')
        // });

        // connection.end();

        changeLatLon(no, lat, lon);
        isNo = false;
        if (!obj.hasOwnProperty(0)) {
            obj.push({'no': no, 'lat': lat, 'lon': lon });
        }
        
        callback(obj);
    }
    else {
        callback({ 'response': "not ok" });
    }
    position = null;
}

exports.givepos3 = function (lat, lon, callback) {
    if (lat != null) {
        callback({ 'lat': lat, 'lon': lon });
    } else {
        callback({ 'response': "not ok" });
    }
}

exports.dbconnect = function (lat, lon, callback) {
    req.getConnection(function (err, connection) {

        position = {
            position_latitude: lat,
            position_longitude: lon
        };

        connection.query('UPDATE position set ? WHERE Position_id = ? ', [position, id], function (err, rows, fields) {
            if (err) throw err

            console.log('Complete')
        });

    });
}

function changeLatLon(no, lat, lon) {
    for (var i in obj) {
        if (no == obj[i].no) {
            obj[i].lat = lat;
            obj[i].lon = lon;
            isNo = true;
            break;
        }
    }
    if (!isNo) {
        obj.push({'no': no, 'lat': lat, 'lon': lon });
        isNo = false;
    }
}
