const express = require('express');
const router = express.Router();

const { getAllProductById, getAllProducts } = require('../controller/productControllers');

// get all products

router.get('/', getAllProducts)

router.get('/:id', getAllProductById)


module.exports = router;
