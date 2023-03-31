const express = require("express");
const router = express.Router();

const { createBkTest, getBookedTest } = require('../controllers/book_test.js');

router.post('/createBkTest', createBkTest);
router.get('/getBookedTest', getBookedTest);

module.exports = router;
