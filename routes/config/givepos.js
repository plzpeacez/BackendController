exports.givepos = function (lat, lon, callback) {
    if (lat != null) {
        callback({ 'lat': lat, 'lon':lon });
    }
    else{
        callback({'response':"not ok"});
    }
}