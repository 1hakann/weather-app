const express = require('express');
const router = new express.Router();

router.get('/help', (req, res) => {
    res.render('help', {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Hakan Çakmak"
    })
})

router.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hakan Çakmak',
        errorMessage: 'Help article not found.'
    })
})

module.exports = router;