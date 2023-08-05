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

module.exports.allPatients = async (req, res) => {
    try {
        const patients = await Results.find({});
        res.send({ patients });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}

module.exports.filteredPatients = async (req, res) => {
    try {
        const filtered = req.params;
        const patients = await Results.find({ results: filtered });
        res.send({ patients });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}
