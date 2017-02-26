exports.givepos = function (lat, lon, callback) {
    if (lat != null) {
        callback({ 'response': lat+" "+lon });
    }
    else{
        callback({'response':"not ok"});
    }
}