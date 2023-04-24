const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const programSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exerciseId: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    }
})

module.exports = mongoose.model('Program', programSchema);