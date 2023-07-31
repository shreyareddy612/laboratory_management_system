const Results =  require("../models/results.js");

module.exports.createResults = async (req, res) => {
    try {
        const results = await Results.create({
            results: req.body.results,
            test_no: req.body.test_no,
            staff: req.body.staff
        });
        res.send({ results })
    } catch (error) {
        res.status(400).send({ error: error });
    }
}
