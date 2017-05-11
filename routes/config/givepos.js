var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'allbus' //database name
});

var id = "1";
var position = null;
var obj1 = [];
var obj2 = [];
var obj3 = [];
var isNo = false;

exports.givepos1 = function (lat, lon, no, callback) {

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

        changeLatLon1(no, lat, lon);
        isNo = false;
        if (!obj1.hasOwnProperty(0)) {
            obj1.push({'no': no, 'lat': lat, 'lon': lon });
        }
        
        callback(obj1);
    }
    else {
        callback({ 'response': "not ok" });
    }
    position = null;
}

exports.givepos2 = function (lat, lon, no, callback) {

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

        changeLatLon2(no, lat, lon);
        isNo = false;
        if (!obj2.hasOwnProperty(0)) {
            obj2.push({'no': no, 'lat': lat, 'lon': lon });
        }
        
        callback(obj2);
    }
    else {
        callback({ 'response': "not ok" });
    }
    position = null;
}

exports.givepos3 = function (lat, lon, no, callback) {

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

        changeLatLon3(no, lat, lon);
        isNo = false;
        if (!obj3.hasOwnProperty(0)) {
            obj3.push({'no': no, 'lat': lat, 'lon': lon });
        }
        
        callback(obj3);
    }
    else {
        callback({ 'response': "not ok" });
    }
    position = null;
}

exports.giveposOld = function (lat, lon, callback) {
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

function changeLatLon1(no, lat, lon) {
    for (var i in obj1) {
        if (no == obj1[i].no) {
            obj1[i].lat = lat;
            obj1[i].lon = lon;
            isNo = true;
            break;
        }
    }
    if (!isNo) {
        obj1.push({'no': no, 'lat': lat, 'lon': lon });
        isNo = false;
    }
}

function changeLatLon2(no, lat, lon) {
    for (var i in obj2) {
        if (no == obj2[i].no) {
            obj2[i].lat = lat;
            obj2[i].lon = lon;
            isNo = true;
            break;
        }
    }
    if (!isNo) {
        obj2.push({'no': no, 'lat': lat, 'lon': lon });
        isNo = false;
    }
}

function changeLatLon3(no, lat, lon) {
    for (var i in obj3) {
        if (no == obj3[i].no) {
            obj3[i].lat = lat;
            obj3[i].lon = lon;
            isNo = true;
            break;
        }
    }
    if (!isNo) {
        obj3.push({'no': no, 'lat': lat, 'lon': lon });
        isNo = false;
    }
}