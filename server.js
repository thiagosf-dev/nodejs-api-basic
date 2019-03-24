const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});

// Registrando um model no banco
requireDir('./src/models');

// Carregando rotas
app.use('/api', require('./src/routes'));

app.listen(3000);