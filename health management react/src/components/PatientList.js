import React from 'react';

const PatientList = ({ patients }) => {
    const listStyle = {
        listStyleType: 'none',
        padding: '0',
    };

    const itemStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    };

    const noPatientStyle = {
        fontStyle: 'italic',
        color: '#888',
    };

    return (
        <div>
            <h2>Patient List</h2>
            {patients.length === 0 ? (
                <p style={noPatientStyle}>No patients found.</p>
            ) : (
                <ul style={listStyle}>
                    {patients.map((patient) => (
                        <li key={patient.id} style={itemStyle}>
                            {patient.name} - {patient.age} years old , checked up for {patient.checkup} on {patient.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatientList;
