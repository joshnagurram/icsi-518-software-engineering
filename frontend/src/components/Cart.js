import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css'; // Importing a CSS file for styling

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/cart');
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-list">
                {cartItems.map(item => (
                    item.productId ? (
                        <div key={item._id} className="cart-item">
                            <div className="cart-info">
                                <h3>{item.productId.name}</h3>
                                <p>{item.productId.description}</p>
                                <p className="price">${item.productId.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={item._id} className="cart-item">
                            <div className="cart-info">
                                <p>Product details are not available.</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Cart;
