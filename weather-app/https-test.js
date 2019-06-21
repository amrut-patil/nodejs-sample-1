
const https = require('https');

const url = 'https://api.darksky.net/forecast/5e155215bf4c468d614dd67c7e50c172/40,-75';

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);    
    })
});

request.on('error', (error) => {
    console.log('Error', error);
});

request.end();