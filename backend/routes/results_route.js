const express = require('express');
const router = express.Router();

const { createResults } = require('../controllers/results.js');

router.post('/createResults', createResults);

module.exports = router;
