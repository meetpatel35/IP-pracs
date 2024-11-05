// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ color: '#4CAF50' }}>Welcome to the Health Management System</h2>
            <p style={{ fontSize: '1.2em', color: '#333', maxWidth: '600px', margin: '0 auto' }}>
                This system helps you manage patient appointments, view patient details, and ensure smooth clinic operations. Use the links below to get started with appointments or view the patient list.
            </p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/appointments" style={{ 
                    display: 'inline-block', 
                    padding: '10px 20px', 
                    margin: '10px', 
                    backgroundColor: '#4CAF50', 
                    color: '#fff', 
                    textDecoration: 'none', 
                    borderRadius: '5px' 
                }}>
                    Add Appointment
                </Link>
                <Link to="/patients" style={{ 
                    display: 'inline-block', 
                    padding: '10px 20px', 
                    margin: '10px', 
                    backgroundColor: '#4CAF50', 
                    color: '#fff', 
                    textDecoration: 'none', 
                    borderRadius: '5px' 
                }}>
                    View Patients
                </Link>
            </div>
        </div>
    );
};

export default Home;
