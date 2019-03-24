const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});

// Primeira rota
app.get('/', (req, res) => {
    res.send("Bem vindo");
})

app.listen(3000);