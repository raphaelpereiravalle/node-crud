'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Read
exports.get = async () => {
    const res = await Product.find({
        active: true
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Product.find({
        id: id,
        active: true
    }, 'title price description tags');
}

//Create
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

//Update
exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            code: data.code,
            description: data.description,
            price: data.price,
            tags : data.tags
        }
    });
}

//Delete
exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}