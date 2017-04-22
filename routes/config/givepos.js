var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'allbus' //database name
});

var id = "1";
var position = null;

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
        callback([
            {'no' : no, 'lat': lat, 'lon': lon },
            {'no' : no, 'lat': lat, 'lon': lon },
            {'no' : no, 'lat': lat, 'lon': lon }]
            );
    }
    else {
        callback({ 'response': "not ok" });
    }
    position = null;
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