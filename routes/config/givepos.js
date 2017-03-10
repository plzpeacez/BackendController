var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //edit hostname here
    user: 'root', //username
    password: '1234', //password
    database: 'test' //database name
});

exports.givepos = function (lat, lon, callback) {
    if (lat != null) {
        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            console.log('connected as id ' + connection.threadId);
        });
        connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            if (err) throw err

            console.log('The solution is: ', rows[0].solution)
        });

        connection.end();
        callback({ 'lat': lat, 'lon': lon });
    }
    else {
        callback({ 'response': "not ok" });
    }
}