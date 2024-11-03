import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Wishlist.css'; // Importing a CSS file for styling

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/wishlist'); // Change URL for fetching wishlist items
            setWishlistItems(response.data);
        } catch (error) {
            console.error("Error fetching wishlist items:", error);
        }
    };

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            <div className="wishlist-list">
                {wishlistItems.map(item => (
                    item.productId ? (
                        <div key={item._id} className="wishlist-item">
                            <div className="wishlist-info">
                                <h3>{item.productId.name}</h3>
                                <p>{item.productId.description}</p>
                                <p className="price">${item.productId.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={item._id} className="wishlist-item">
                            <div className="wishlist-info">
                                <p>Product details are not available.</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
