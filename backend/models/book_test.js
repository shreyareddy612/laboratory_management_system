const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booktest = new Schema({
    disease: { type: String, required: true },
    user_email: { type: String, required: true },
});

module.exports = mongoose.model('booktest', booktest);
