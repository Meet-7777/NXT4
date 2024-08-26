import React, { useState, useEffect } from 'react';
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
      setLoading(true);

      let { data: CSKSlotted, error } = await supabase
        .from('CSK Slotted')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } else {
        setData(CSKSlotted || []);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Sorting function
  const sortData = (data, key, order = 'asc') => {
    return data.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Sorting by 'id' in ascending order
  const sortedData = sortData(data, 'id', 'asc');

  return (
    <div className="table-container">
      <Helmet>
        <title>NXT4 Product Database</title>
      </Helmet>

      {loading ? (
        <div className="loading">
          <p>Loading data...</p>
        </div>
      ) : (
        <div>
          <h2 className="title">Omni CSK Slotted</h2>
          {sortedData.length > 0 ? (
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
                {sortedData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.size}</td>
                    <td>{item.packing}</td>
                    <td>{item.csk_100_nos}</td>
                    <td>{item.pan_100_nos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
