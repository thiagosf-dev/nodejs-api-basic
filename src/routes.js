const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota padrão
routes.get('/', (req, res) => {
   console.log("object");
   return res.send("Bem vindo");
});

routes.get('/products', ProductController.index)
      .post('/products', ProductController.store)
      .put('/products/:id', ProductController.update)
      .delete('/products/:id', ProductController.destroyer);

routes.get('/products/:id', ProductController.show);

module.exports = routes;