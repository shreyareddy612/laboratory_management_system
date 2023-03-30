const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const booktest = new Schema({
    disease: { type: String, required: true },
    date_for_test: { type: Date, required: true },
    time_for_test: { type: String, required: true },
    user_email: { type: String, required: true, ref: 'users' },
});

module.exports = mongoose.model('booktest', booktest);
