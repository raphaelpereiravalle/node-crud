'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'O title é obrigatório!'],
        trim: true
    },
    code: { 
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
/*    , image: {
        type: String,
        required: true,
        trim: true
    } */
});

module.exports = mongoose.model('Product', schema);