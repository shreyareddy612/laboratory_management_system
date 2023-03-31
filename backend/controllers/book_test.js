const BkTest = require('../models/book_test');

module.exports.createBkTest = async (req, res) => {
    try {
        const CreateBooking = BkTest.create({
            disease: req.body.disease,
            user_email: req.body.user_email
        });
        res.send({ CreateBooking });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}

module.exports.getBookedTest = async (req, res) => {
    try {
        const booked = BkTest.find({});
        res.send({ booked });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}
