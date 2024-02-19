const express = require('express');
const router = new express.Router();

router.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hakan Çakmak',
        errorMessage: 'Page not found.'
    })
})

module.exports = router;