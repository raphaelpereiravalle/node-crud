'use strict';

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

//Read
exposts.getById = async(id) => {
    const res = Client.findById(id);
    return res;
} 

//Create
/* exports.create = async(data) => {
    var client = new Client(data);
    client.save();
}
 */
//Update

//Delete