const express = require('express');
const router =  express.Router();
const geocode = require('../src/utils/geocode');
const forecast = require('../src/utils/forecast');

router.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "You must provide an address!"
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                location: "Ordu",
                address: req.query.address
            });
        });
    });
});

module.exports = router;