const express = require('express');
const router = new express.Router();

router.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Hakan Çakmak"
    })
})

// app.get('/', (req, res) => res.send('Weather App'))

module.exports = router;