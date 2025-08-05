const express = require('express');
const router = express.Router();
const { getProduct, updateProductPrice } = require('../controllers/productController');

router.get('/:id', getProduct);

router.put('/:id', updateProductPrice);

module.exports = router;