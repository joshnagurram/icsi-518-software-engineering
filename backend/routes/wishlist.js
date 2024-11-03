// backend/routes/wishlist.js
const express = require('express');
const Wishlist = require('../models/Wishlist');
const router = express.Router();

// Get all items in the wishlist
router.get('/', async (req, res) => {
    try {
        const wishlistItems = await Wishlist.find().populate('productId'); // Populate if you want to get product details
        res.json(wishlistItems);
    } catch (error) {
        console.error("Error fetching wishlist items:", error);
        res.status(500).json({ message: 'Failed to retrieve wishlist items' });
    }
});

// Add a new item to the wishlist
router.post('/', async (req, res) => {
    const { productId } = req.body;

    const newItem = new Wishlist({ productId });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding item to wishlist:", error);
        res.status(400).json({ message: 'Failed to add item to wishlist' });
    }
});

module.exports = router;
