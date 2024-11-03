// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-item" to="/">Product Listing</Link>
                <Link className="navbar-item" to="/wishlist">Wishlist</Link>
                <Link className="navbar-item" to="/cart">Cart</Link>
                <Link className="navbar-item" to="/add-product">Add Product</Link>
            </div>
        </nav>
    );
};

export default Navbar;
