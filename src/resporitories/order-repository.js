'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    const res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}