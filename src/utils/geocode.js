const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

async function geocode(location) {
    try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiaGFrYW5jYWttYWsiLCJhIjoiY2xzcmt5b3psMHdzdTJrbzgzdGVhaTl2aSJ9.k3STFSbBdZZ9dVXKL-ErMg`);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Geocode API request failed');
    }
}

module.exports = geocode;