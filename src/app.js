 'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Conexão de banco de dados
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
//mongoose.set('useCreateIndex', true);
mongoose.connect(config.connectionString);

// Carregar Models
//const Client = require('./models/client');
const Product = require('./models/product'); 
const Order = require('./models/order');

// Carregar Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
//const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');


app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({ 
    extended: false 
}));

// Carregar Controller
app.use('/', indexRoute);
app.use('/products', productRoute);
//app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

// Adicionar objetos e funções
module.exports = app;