// routes/api.js
const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

// Route to get data with a callback function
router.get('/data', (req, res) => {
    console.log("Received request for data");

    // Calling the data service with a callback function
    dataService.getData((err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching data' });
        }
        res.json({ data });
    });
});

module.exports = router;
