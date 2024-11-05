import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        textAlign: 'center',
        padding: '10px 0',
    };

    const navStyle = {
        margin: '10px 0',
    };

    const linkStyle = {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#007bff',
    };

    return (
        <header style={headerStyle}>
            <h1>Health Management System</h1>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Home</Link> | 
                <Link to="/appointments" style={linkStyle}>Add Appointment</Link> | 
                <Link to="/patients" style={linkStyle}>View Patients</Link>
            </nav>
        </header>
    );
};

export default Header;
