'use strict';

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

//Read
exports.get = async () => {
    const res = await Client.find({
        active: true
    });
    return res;
}

//Search
exposts.getById = async(id) => {
    const res = Client.findById(id);
    return res;
} 

//Create
exports.create = async(data) => {
    var client = new Client(data);
    client.save();
}
 
//Update
exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            roles: data.roles
        }
    });
}

//Delete
exports.delete = async(id) => {
    await Client.findOneAndRemove(id);
}