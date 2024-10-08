import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import supabase from './supabaseClient';

export default function SmpsDriver() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let { data: smpsDrivers, error } = await supabase
                .from("smps_drivers_rate")
                .select('*');
            if (error) {
                console.log("Error fetching the data", error);
                setData([]);
            } else {
                setData(smpsDrivers || []);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="table-container">
            <Helmet>
                <title>NXT4 - SMPS Driver Rates</title>
            </Helmet>
            {loading ? (
                <div className="loading">
                    <p>Loading data...</p>
                </div>
            ) : (
                <div>
                    <h2 className="title">SMPS Driver</h2>
                    {data.length > 0 ? (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Driver Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.driver_name}</td>
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
