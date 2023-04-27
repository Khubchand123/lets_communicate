const mongoose = require('mongoose');
const { Schema } = mongoose;
const ansSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    "0": {
        type: String,
        default: "Type here..."
    },
    "1": {
        type: String,
        default: "Type here..."
    },
    "2": {
        type: String,
        default: "Type here..."
    },
    "3": {
        type: String,
        default: "Type here..."
    },
    "4": {
        type: String,
        default: "Type here..."
    },
    "5": {
        type: String,
        default: "Type here..."
    },
    "6": {
        type: String,
        default: "Type here..."
    },
    "7": {
        type: String,
        default: "Type here..."
    },
    "8": {
        type: String,
        default: "Type here..."
    },
    "9": {
        type: String,
        default: "Type here..."
    },

    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('hrans', ansSchema);