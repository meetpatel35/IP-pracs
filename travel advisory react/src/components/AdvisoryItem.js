// src/components/AdvisoryItem.js
import React from 'react';

const AdvisoryItem = ({ advisory }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            margin: '15px 0',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <h2 style={{ color: '#4CAF50', margin: 0, fontSize: '20px' }}>{advisory.country}</h2>
            <p><strong>Advisory Level:</strong> {advisory.level}</p>
            <p>{advisory.details}</p>
        </div>
    );
};

export default AdvisoryItem;
