const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

const categoriesModel = mongoose.model('categories', categorySchema);

module.exports = categoriesModel;