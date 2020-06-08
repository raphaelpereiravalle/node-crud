'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

//Read
exports.get = async(data) => {
    const res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

//Create
exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

//Update
exports.update = async(id, data) => {
    await Order.findByIdAndUpdate(id, {
        $set: {
            number: data.number,
            createDate: Date.now
            //,items.quantity: data.quantity
        }
    });
}

//Delete
exports.delete = async(id) => {
    await Order.findByIdAndDelete(id)
}