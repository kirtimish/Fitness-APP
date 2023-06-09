const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timeLength: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Exercise', exerciseSchema);