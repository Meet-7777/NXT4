import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import supabase from './supabaseClient';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading state

      // Fetching data from Supabase
      let { data: CSKSlotted, error } = await supabase
        .from('CSK Slotted') // Ensure this matches exactly with your table name
        .select('*'); // Fetch all columns from the table

      if (error) {
        console.error('Error fetching data:', error);
        setData([]); // If there's an error, ensure data is an empty array
      } else {
        setData(CSKSlotted || []); // Set fetched data or an empty array if null
      }
      setLoading(false); // End loading state
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-brand">NXT4</div>
      </div>
      {loading ? (
        <div className="loading">
          <p>Loading data...</p>
        </div>
      ) : (
        <div className="table-container">
          <h2 className="title">Omni CSK Slotted</h2>
          {data.length > 0 ? (
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Size</th>
                  <th>Packing</th>
                  <th>CSK/100 NOS</th>
                  <th>PAN/100 NOS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.size}</td>
                    <td>{item.packing}</td>
                    <td>{item['csk_100_nos']}</td>
                    <td>{item['pan_100_nos']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
      
  <footer className="App-footer bg-light p-3 mt-4 footer">
    
      <p className="text-center mb-0">© 2024 NXT4. All rights reserved.</p>
      <p className="text-center mb-0 footer-text">Proudly crafted in India ❤️</p>
    
  </footer>
  
    </div>
    
  );

}
 
export default App;
