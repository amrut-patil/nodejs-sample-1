const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

//Define paths for Express config
const publidDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup statis directory to serve
app.use(express.static(publidDirectoryPath));

app.get('', (rer, res) => {
    res.render('index', {
        title: "Weather App",
        name: 'Test Name'
    });
})

app.get('/about', (rer, res) => {
    res.render('about', {
        title: "About Me",
        name: 'Test Name 2'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "My name",
        helpText: "This is  some help text"
    });
});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: "address must be provided"
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, place} = {})=> {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error)             {
                res.send({error})
            }

            res.send({
                forecast: forecastData,
                location: place,
                address: req.query.address
            })
        })
    });
    
    // res.send({
    //     forecast: 'it is raining',
    //     location: 'Pune',
    //     address: req.query.address
    // });
});


app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'provide search term'
        })
    }

    res.send({
        products: []
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "my help",
        errorMessage: "Help article page not found"
    });

});

app.get('*', (rer, res) => {
    res.render('404', {
        title: "404",
        name: "my name",
        errorMessage: "Page not found"
    });
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});


// app.get('', (req, res) => {
//     res.send("<h1>Weather</h1>");
// });

// app.get('/help', (req, res) => {
//     res.send({
//         name: "Amar",
//        place: "Kolhapur" 
//     });
// });

// app.get('/about', (req, res) => {
//     res.send("<title>About</title>");
// });



