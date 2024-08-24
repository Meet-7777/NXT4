import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // CSK Slotted component
import CskPhliphs from './CskPhliphs'; // CSK Philips component
import Layout from './Layout'; // Layout component

function MainRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} /> {/* Route for CSK Slotted */}
                    <Route path="/csk-philiphs" element={<CskPhliphs />} /> {/* Route for CSK Philips */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default MainRouter;
