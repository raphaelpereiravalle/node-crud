 'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

const app = express();

// Conexão de banco de dados

// Carregar Rotas
const indexRoute = require('./routes/index-route');
// Carregar Models

// Carregar Controller
app.use('/', indexRoute);

// Adicionar objetos e funções
module.exports = app;