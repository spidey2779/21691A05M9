const express = require('express');
const { getTopProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

router.get('/:categoryName/products', getTopProducts);
router.get('/:categoryName/products/:productId', getProductById);

module.exports = router;
