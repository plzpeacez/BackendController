var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'allbus' //database name
});

var id = "1";
var position = null;

exports.givepos = function (lat, lon, callback) {

    position = {
        position_latitude: lat,
        position_longitude: lon
    };

    if (lat != null) {
        // connection.connect(function (err) {
        //     if (err) {
        //         console.error('error connecting: ' + err.stack);
        //         return;
        //     }

        //     console.log('connected as id ' + connection.threadId);
        // });
        connection.query('UPDATE position set ? WHERE Position_id = ? ', [position, id], function (err, rows, fields) {
            if (err) throw err

            console.log('Complete')
        });

        // connection.end();
        callback({ 'lat': lat, 'lon': lon });
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