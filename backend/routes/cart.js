const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Get all items in the cart with populated product details
router.get('/', async (req, res) => {
    try {
        const cartItems = await Cart.find().populate('productId');
        res.json(cartItems);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: 'Failed to retrieve cart items' });
    }
});

// Add a new item to the cart
router.post('/', async (req, res) => {
    const { productId } = req.body; // Make sure to receive productId

    const newItem = new Cart({ productId });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(400).json({ message: 'Failed to add item to cart' });
    }
});

module.exports = router;
