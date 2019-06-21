const request = require('request');

geocode = (name, callback) => {

    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(name) + ".json?access_token=pk.eyJ1IjoiYW1ydXRwYXRpbHJlZGlmZmNvbSIsImEiOiJjandsczNmYXowMWFrM3lvemJ5emlkN2NiIn0._H_Hp1z9YLmiaLFwqNT9MA&limit=1";

    request({ url: geocodeUrl, json: true }, (error, respone) => {
        if (error) {
            callback(error, undefined);
        } else if (respone.body.features.length == 0) {
            callback("unable to find location", undefined);
        } else {
            callback(undefined, {
                place: respone.body.features[0].place_name,
                latitude: respone.body.features[0].center[1],
                longitude: respone.body.features[0].center[0]
            });
        }
    })
}

module.exports = geocode;
