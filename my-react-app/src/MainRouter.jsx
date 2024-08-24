import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CskPhliphs from './CskPhliphs';
import Layout from './Layout'; 

function MainRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} /> 
                    <Route path="/csk-philiphs" element={<CskPhliphs />} /> 
                </Routes>
            </Layout>
        </Router>
    );
}

export default MainRouter;
