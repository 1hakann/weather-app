const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const hbs = require('hbs')
const helpRouter = require('../routes/help')
const aboutRouter = require('../routes/about')
const weatherRouter = require('../routes/weather')
const indexRouter = require('../routes/index')
const notFoundRouter = require('../routes/notFound')
const geocode = require('../src/utils/geocode');
const forecast = require('../src/utils/forecast');

dotenv.config();
const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.get('/weather', (req, res) => {
//     if (!req.query.address) {
//         return res.send({
//             error: 'You must provide an address!'
//         })
//     }

//     res.send({
//         forecast: "it is snowing",
//         location: "Ordu",
//         address: "Boston"
//     })

//     geocode(req.query.address, (error, { latitude, longitude, location }) => {
//         if (error) {
//             return res.send({ error })
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return res.send({ error })
//             }

//             res.send({
//                 forecast: forecastData,
//                 location: location,
//                 address: req.query.address
//             })
//         })
//     })
// })

app.use(indexRouter);
app.use(helpRouter);
app.use(aboutRouter);
app.use(weatherRouter);
app.use(notFoundRouter);




app.listen(port, () => {
    console.log('Server is up on port ' + port);
})