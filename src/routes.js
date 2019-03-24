const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get('/', (req, res) => {
   return res.send("Bem vindo");
});

routes.get('/products', ProductController.index);

module.exports = routes;