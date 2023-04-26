const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const programSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
          type: Object, required: true
        }
      ]
})

module.exports = mongoose.model('Program', programSchema);