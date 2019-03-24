const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Permitir enviar dados para a app no formato JSON
app.use(express.json());

// Configurando o CORS
app.use(cors());

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});

// Registrando uma pasta de models no banco
requireDir('./src/models');

// Carregando rotas
app.use('/api', require('./src/routes'));

app.listen(3000, () => "API rodando em http://localhost:3000");