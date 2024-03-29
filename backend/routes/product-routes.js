import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/product-model.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error('Not authorized');
    res.json(products);
}));

// @desc    Fetch a single product by Id
// @route   GET /api/products/:id
// @access  public
router.get('/:id', asyncHandler(async (req, res) => {
    let product;
    product = await Product.findById(req.params.id);

    // try {
    //     product = await Product.findById(req.params.id);
    // }
    // catch (error) {
    //     //console.log(error);
    // }

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found.');
    }
}));

export default router;