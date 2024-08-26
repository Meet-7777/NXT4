import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CskPhliphs from './CskPhliphs';
import SmpsDriver from './SmpsDriver';
import Layout from './Layout'; 
import DrywallPopRates from './DrywallPopRates';
import WoodenScrewCaprice from './WoodenScrewCaprice';
function MainRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} /> 
                    <Route path="/csk-philiphs" element={<CskPhliphs />} />
                    <Route path="/smps-driver-rates" element={<SmpsDriver />} /> 
                    <Route path="/dry-wall-pop-rates" element={<DrywallPopRates/>}/>
                    <Route path="/wooden-screw-caprice" element={<WoodenScrewCaprice/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default MainRouter;
