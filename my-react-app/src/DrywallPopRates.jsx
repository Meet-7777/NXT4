import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import supabase from './supabaseClient';

export default function DrywallPopRates() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                let { data: DrywallPopRates, error } = await supabase
                    .from("drywall_pop_rates")
                    .select('*');
                if (error) {
                    setError("Error fetching the data");
                    setData([]);
                } else {
                    setData(DrywallPopRates || []);
                }
            } catch (error) {
                setError("Unexpected error occurred");
                setData([]);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="table-container">
            <Helmet>
                <title>NXT4 - Drywall Pop Rates</title>
            </Helmet>
            {loading ? (
                <div className="loading" aria-live="polite">
                    <p>Loading data...</p>
                </div>
            ) : error ? (
                <div className="error">
                    <p>{error}</p>
                </div>
            ) : (
                <div>
                    <h2 className="title">Drywall Pop Rates</h2>
                    {data.length > 0 ? (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Size</th>
                                    <th>Packing</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.size}</td>
                                        <td>{item.packing}</td>
                                        <td>{item.price}</td>
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
