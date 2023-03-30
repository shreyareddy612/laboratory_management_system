const express = require('express');
const resultsRouter = express.Router();

const Result = require('../models/results');

// @route   GET /api/results/
// @desc    Get all results
// @access  Public
resultsRouter.get('/', async (req, res) => {
    try {
        const results = await Result.find({})
        res.send({ results });
    } catch (error) {
        res.status(400).send({error: error});
    }
});


// @route   GET /api/results/:id
// @desc    Get a result by id
// @access  Public
resultsRouter.get('/:id', async (req, res) => {
    try {
        const result = await Result.findById(req.params.id);
        res.send({ result })
    } catch (error) {
        res.status(400).send({ error: error });
    }
});

// @route   POST /api/results/
// @desc    Create a new result
// @access  Public
resultsRouter.post('/', async (req, res) => {
    try {
        const newresult = await Result.create({
            results: req.body.test_resuts,
            test_no: req.body.test_no,
            staff: req.body.staff
        });
        res.send({ newresult });
    } catch (error) {
        res.status(400).send({ error: error });
    }
});

// @route   PUT /api/results/:id
// @desc    update the results
// @access  public
resultsRouter.put('/:id', async (req, res) => {
    try {
        const updateResult = await Result.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: 'The result was updated' });
    } catch (error) {
        res.status(400).send({ error: error });
    }
});

// @route   DELETE /api/results/:id
// @desc    delete a result
// @access  Public
resultsRouter.delete('/:id', async (req, res) => {
    try {
        const removeresult = await Result.findByIdAndRemove(req.params.id);
        res.send({ message: 'The user was removed' });
    } catch (error) {
        res.status(400).send({ error: error });
    }
});

module.exports = resultsRouter;
