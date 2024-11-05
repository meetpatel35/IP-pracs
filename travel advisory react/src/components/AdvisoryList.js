// src/components/AdvisoryList.js
import React from 'react';
import AdvisoryItem from './AdvisoryItem';

const AdvisoryList = ({ advisories }) => {
    return (
        <div style={{ padding: '20px' }} id="advisories">
            {advisories.map((advisory, index) => (
                <AdvisoryItem key={index} advisory={advisory} />
            ))}
        </div>
    );
};

export default AdvisoryList;
