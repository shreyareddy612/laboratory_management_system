const express = require('express');

const BookTest = require('../models/book_test')


// Create Booking for test
module.exports.bookTest = async (req, res) => {
    try {
        const newBkTest = await BookTest.create({
            disease: req.body.disease,
            date_for_test: req.body.date_for_test,
            time_for_test: res.body.time_for_test,
            user_email: res.body.email
        });
        res.status(200).send({ message: "successfully added new bktest" });
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

// Get all tests
module.exports.getBookedTests = async (req, res) => {
    try {
        const bktest = await BookTest.find({});
        res.send({ bktest });
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

// // @route   GET /api/bktest/id
// // @desc    Get bktest by id
// // @access  Public
// bookTestRouter.get('/:id', async (req, res) => {
//     try {
//         const bktest = await BookTest.findById(req.params.id);
//         res.send({ bktest });
//     } catch (error) {
//         res.status(400).send({ error: error });
//     }
// });

// // @route   PUT /api/bktest/id
// // @desc    Update bktest information by id
// // @access  Private (Staff)
// bookTestRouter.put('/:id', async (req, res) => {
//     try {
//         const updateBookTest = await BookTest.findByIdAndUpdate(req.params.id, req.body);
//         res.status(200).send({ message: "Updated bktest Info" });
//     } catch (error) {
//         res.status(400).send({ error: error });
//     }
// });

// // @route   DELETE /api/bktest/id
// // @desc    Delete bktest Info by id
// // @access  Private (Staff)
// bookTestRouter.delete('/:id', async (req, res) => {
//     try {
//         const deleteBkTest = await BookTest.findByIdAndRemove(req.params.id);
//         res.status(200).send({ message: "Successfully Deleted" });
//     } catch (error) {
//         res.status(400).send({ error: error });
//     }
// });

