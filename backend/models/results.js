const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const results = new Schema({
    results: {type: String, required: true},
    test_no: {type: Schema.Types.ObjectId, ref: "booktest"},
    staff: {type: Schema.Types.ObjectId, ref: "staff"},
});

module.exports = mongoose.model('results', results);
