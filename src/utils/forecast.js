const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

async function forecast(latitude, longitude) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.FORECAST_API_KEY}&q=${latitude},${longitude}`);
        console.log(response.data);
        return response.data;
    } catch(err) {
        console.error(err);
        throw new Error('Forecast API request failed: ' + err.message);
    }
};

module.exports = forecast;