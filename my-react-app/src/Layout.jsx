import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming the styles are in App.css

const Layout = ({ children }) => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-brand">NXT4</div>
                <div className="navbar-menu">
                    <Link to="/">CSK Slotted</Link>
                    <Link to="/csk-philiphs">CSK Philips</Link>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="footer">
                <p className="mb-0">© 2024 NXT4. All rights reserved.</p>
                <p className="mb-0">Proudly crafted in India ❤️</p>
            </footer>
        </div>
    );
}

export default Layout;
