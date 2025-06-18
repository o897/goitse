const mongoose = require('mongoose')

// Define Schema
const resutlsSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique: true,
    },
    dob : {
        type : Date,
        required: true,
    },
    contact : {
        type : String,
        required: true,
    }
})

// create ad export the model
const Result = mongoose.model('Result', resutlsSchema);
model.exports = Result