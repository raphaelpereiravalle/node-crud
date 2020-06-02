'use strict';

const mongoose = requise('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        requered: true 
    },
    roles: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        defalt: 'user'
    }
});

module.exports = mongoose.model('Client', schema);