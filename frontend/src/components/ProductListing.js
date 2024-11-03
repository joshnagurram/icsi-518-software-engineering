import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductListing.css'; // Import the CSS file

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (productId) => {
        axios.post('http://localhost:3001/api/cart', { productId })
            .then(() => alert("Added to cart"))
            .catch(error => console.error('Error adding to cart:', error));
    };

    const addToWishlist = (productId) => {
        axios.post('http://localhost:3001/api/wishlist', { productId })
            .then(() => alert("Added to wishlist"))
            .catch(error => console.error('Error adding to wishlist:', error));
    };

    return (
        <div className="product-listing-container">
            <h1>Product Listing</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-tile">
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <div className="button-container">
                            <button className="btn" onClick={() => addToCart(product._id)}>Add to Cart</button>
                            <button className="btn" onClick={() => addToWishlist(product._id)}>Add to Wishlist</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
