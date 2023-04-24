const { json } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    title:{
        type: String,
        required: true
    },
    di:{
        type:[]
    }
});
module.exports = mongoose.model('topics',NoteSchema);