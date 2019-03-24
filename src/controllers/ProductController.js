const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
   async index(req, res) {
      const products = await Product.find();

      return res.json(products)
   },

   async show(req, res) {
      return res.json(await Product.findById(req.params.id));
   },

   async store(req, res) {
      const product = await Product.create(req.body);

      return res.json(product);
   },

   async update(req, res) {
      return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {
         new: true
      }));
   },

   async destroyer(req, res) {
      return res.json(await Product.findByIdAndRemove(req.params.id));
   }
};