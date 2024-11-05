// src/components/Header.js
import React from 'react';
// import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 0',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{ margin: 0, fontSize: '24px' }}>Travel Advisory WebApp</h1>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0' }}>
                    <li style={{ display: 'inline', margin: '0 20px' }}>
                        <a href="#advisories" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Advisories</a>
                        {/* <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Advisories</Link> */}
                    </li>
                    <li style={{ display: 'inline', margin: '0 20px' }}>
                        <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>About</a>
                        {/* <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>About</Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
