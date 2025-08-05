const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  current_price: {
    value: {
      type: Number,
      required: true
    },
    currency_code: {
      type: String,
      required: true,
      default: 'USD'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);