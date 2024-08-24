import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './App.css'; // Assuming the styles are in App.css

const Layout = ({ children }) => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-brand">NXT4</div>
                <div className="navbar-menu">
                    <NavLink to="/" exact activeClassName="active">CSK Slotted</NavLink>
                    <NavLink to="/csk-philiphs" activeClassName="active">CSK Philips</NavLink>
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
