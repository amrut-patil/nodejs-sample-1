const request = require('request');

weather = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/5e155215bf4c468d614dd67c7e50c172/' + latitude + ',' + longitude;
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined);
        } else if (response.body.error) {
            callback(response.body.error, undefined);
        } else {
            callback(undefined, response.body.currently);
        }
    })
}

module.exports = weather;