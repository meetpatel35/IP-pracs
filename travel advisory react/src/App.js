// src/App.js
import React from 'react';
import Header from './components/Header';
import AdvisoryList from './components/AdvisoryList';

const App = () => {
    const advisories = [
        { country: "Travel Advisory for France", level: "High", details: "Travelers are advised to exercise caution due to ongoing protests." },
        { country: "Travel Advisory for Japan", level: "Moderate", details: "Travelers should remain aware of their surroundings." },
        { country: "Travel Advisory for Brazil", level: "High", details: "Travelers are advised to avoid certain areas due to crime." },
        { country: "Travel Advisory for India", level: "Low", details: "No major advisories, but exercise normal precautions." },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', margin: 0, padding: 0 }}>
            <Header />
            <main style={{ padding: '20px' }}>
                <AdvisoryList advisories={advisories} />
            </main>
        </div>
    );
};

export default App;
