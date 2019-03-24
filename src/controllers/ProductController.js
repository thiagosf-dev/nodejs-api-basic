const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
   async index(req, res) {
      const {
         page = 1
      } = req.query;

      // const products = await Product.find();

      return res.json(await Product.paginate({}, {
         page,
         limit: 5,
      }));
   },

   async show(req, res) {
      return res.json(await Product.findById(req.params.id));
   },

   async store(req, res) {
      return res.json(await Product.create(req.body));
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