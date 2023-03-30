const express = require('express');

const bookTestRouter = express.Router();

const { bookTest, getBookedTests } = require("../controllers/bktest.js");

bookTestRouter.post("/bookTest", bookTest);
bookTestRouter.get("/getBookedTests", getBookedTests);

module.exports = bookTestRouter;
